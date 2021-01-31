  
sayilar = []
girdi = int(input("kac sayı girilecek : "))
for i in range(girdi):
    sayi=int(input("{}. sayıyı girdin :". format(i+1)))
    sayilar+=[sayi]
print(sayilar)

def yerDegistirme(liste):
    sifir= []
    digersayilar=list()
    for i in liste:
        if i==0:
            sifir.append(i)
        else:
            digersayilar.append(i)
    cikti = sifir + digersayilar
    return (cikti)
x=yerDegistirme(sayilar)
print(x)