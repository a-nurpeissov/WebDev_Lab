a = int(input("type a number to get sum of:"))
c = 0 

while a > 0:
    b = a % 10
    c += b
    a //= 10 

print(c)
