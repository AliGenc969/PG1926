
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>www.yazilimkodlama.com</title>
</head>
<body>
        <form name="toplam">
            <label>Sayı : </label>
            <input type="text" id="txtSayi"><br><br>
            <input type="button" id="btnHesap" value="HESAPLA"><br><br>
            <label id="lblSonuc"></label>
        </form>
                    
<script>

    var btn=document.getElementById("btnHesap");
    btn.onclick=function(){
        var i,j;
        var toplam=0;
        var sayi=Number(document.getElementById("txtSayi").value);
        for(i=1;i<sayi;i++)
         {
             if (sayi%i==0)
             {
                toplam=toplam+i;	
             }
         }
             if (sayi==toplam)
             {
                
               alert(sayi + " Sayısı Mükemmel Sayıdır"); 
             }
             else
             {
               alert(sayi + " Sayısı Mükemmel Sayı Değildir");
             }
         }
</script>
</body>
</html>
