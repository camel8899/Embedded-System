TARGET=pwm
OBJECT=pwm.o
CC=gcc
CXX=g++
LD=g++
LD_FLAGS += -lwiringPi
C_FLAGS=
ALL : $(TARGET)
$(TARGET) : $(OBJECT) 
	$(LD) $^ $(LD_FLAGS) -o $@
%.o : %.c
	$(CC) $(C_FLAGS) -c $<
%.o : %.cpp
	$(CXX) $(C_FLAGS) -c $<
.PHONY: clean
clean :
	-rm -f $(TARGET) $(OBJECT) 
