var util = require('util');

var bleno = require('bleno');

var BlenoCharacteristic = bleno.Characteristic;

global.XAXIS = 0;
global.YAXIS = 1;
global.ZAXIS = 2;

var ADXL345 = require('./ADXL345.js');

var globalvar = {
  SAMPLECOUNT : 400,
  accelScaleFactor : [0.0, 0.0, 0.0],
  runTimeAccelBias : [0, 0, 0],
  accelOneG : 0.0,
  meterPerSecSec : [0.0, 0.0, 0.0],
  accelSample : [0, 0, 0],
  accelSampleCount : 0
};

var accel = new ADXL345(function(err) {
  accel.accelScaleFactor[XAXIS] = 0.0371299982;
  accel.accelScaleFactor[YAXIS] = -0.0374319982;
  accel.accelScaleFactor[ZAXIS] = -0.0385979986;
  if (!err) {
    accel.computeAccelBias(function() {
      setInterval(function() {
	accel.measureAccel(function(err) {
	  if (err) {
            console.log(err);
	  }
	});
      }, 10);
    });
  } else {
    console.log(err);
  }
});

var AdxlCharacteristic = function() {
  AdxlCharacteristic.super_.call(this, {
    uuid: '1902',
    properties: ['read', 'write', 'notify'],
    value: null
  });

  this._value = new Buffer(0);
  this._updateValueCallback = null;
};

util.inherits(AdxlCharacteristic, BlenoCharacteristic);

AdxlCharacteristic.prototype.onReadRequest = function(offset, callback) {
  this._value = new Buffer(
    accel.meterPerSecSec[global.XAXIS].toString().split("").slice(0, 6).map(str => str.charCodeAt(0)).concat(
      [32], accel.meterPerSecSec[global.YAXIS].toString().split("").slice(0, 6).map(str => str.charCodeAt(0)),
      [32], accel.meterPerSecSec[global.ZAXIS].toString().split("").slice(0, 6).map(str => str.charCodeAt(0))
    )
  )

  console.log('EchoCharacteristic - onReadRequest: value = ' + this._value.toString());

  if (this._updateValueCallback) {
    this._updateValueCallback(this._value);
  }

  callback(this.RESULT_SUCCESS, this._value);
};

//AdxlCharacteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback) {
//  this._value = data;

//  console.log('EchoCharacteristic - onWriteRequest: value = ' + this._value.toString('hex'));

//  if (this._updateValueCallback) {
//    console.log('EchoCharacteristic - onWriteRequest: notifying');

//    this._updateValueCallback(this._value);
//  }

//  callback(this.RESULT_SUCCESS);
//};

AdxlCharacteristic.prototype.onSubscribe = function(maxValueSize, updateValueCallback) {
  console.log('EchoCharacteristic - onSubscribe');

  this._updateValueCallback = updateValueCallback;
};

AdxlCharacteristic.prototype.onUnsubscribe = function() {
  console.log('EchoCharacteristic - onUnsubscribe');

  this._updateValueCallback = null;
};

module.exports = AdxlCharacteristic;
