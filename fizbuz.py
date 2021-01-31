a = range(1,100)
for sayi in a:
    if sayi %3==0:
        if sayi%5==0:
           print("FizzBuzz")
        else:
            print("Fizz")
    elif sayi %5 ==0:
        print("Buzz") 
    else:
        print(sayi)     