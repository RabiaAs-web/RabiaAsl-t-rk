// Tarayıcı hafızasını (localStorage) kullanarak seçilen tur bilgilerini tutacağız.
// Böylece sayfalar değişse bile sepet verimiz kaybolmayacak.

function sepeteEkle(turAdi, fiyat) {
    // 1. Gelen tur adını ve fiyatını tarayıcının geçici hafızasına kaydediyoruz
    localStorage.setItem("secilenTur", turAdi);
    localStorage.setItem("turFiyati", fiyat);
    
    // 2. Kullanıcıya turun başarıyla eklendiğine dair bir bilgi mesajı gösteriyoruz
    alert(turAdi + " başarıyla sepetinize eklendi! Sepetim sayfasından kontrol edebilirsiniz.");
}

// İletişim sayfasındaki form gönderildiğinde çalışacak fonksiyon
function formuGonder() {
    alert("Mesajınız başarıyla iletildi! En kısa sürede sizinle iletişime geçeceğiz.");
    return false; // Sayfanın kendi kendine yenilenmesini engellemek için false döndürüyoruz
}
// Linke tıklandığında detay sayfası açılmadan hemen önce bilgileri hafızaya kaydeder
function detayResminiAyarla(resimYolu, turAdi, fiyat, aciklama) {
    localStorage.setItem("detayResim", resimYolu);
    localStorage.setItem("detayAdi", turAdi);
    localStorage.setItem("detayFiyat", fiyat);
    localStorage.setItem("detayAciklama", aciklama);

    
   
}
    
function detaydanSepeteEkle() {
    // 1. O an ekranda açık olan ve hafızada tutulan tur bilgilerini alıyoruz
    var guncelTurAdi =localStorage.getItem("detayAdi");
    var guncelTurFiyati = localStorage.getItem("detayFiyat");
    
    // 2. Eğer bilgiler boş değilse, ana sepete ekleme fonksiyonumuzu tetikliyoruz
    if (guncelTurAdi && guncelTurFiyati) {
        sepeteEkle(guncelTurAdi, parseInt(guncelTurFiyati));
    } else {
        alert("Sistemsel bir hata oluştu, lütfen turu tekrar seçin.");
    }
   
}

// Sepetteki "Alışverişi Tamamla" butonuna basınca çalışır
function satinalmaOnayi() {
    alert("Tebrikler! Biletiniz başarıyla rezerve edildi. Mail adresinize bilet detayları gönderilecektir.");
    // Satın alma bitince sepeti otomatik temizliyoruz
    sepetiBosalt();
}

// Sepeti temizleme fonksiyonu
function sepetiBosalt() {
    // Hafızadaki sepet verilerini siliyoruz
    localStorage.removeItem("secilenTur");
    localStorage.removeItem("turFiyati");
    
    // Sayfayı yeniliyoruz ki değişiklik ekrana yansısın
    window.location.reload();
}