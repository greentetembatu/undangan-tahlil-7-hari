


  const urlParams = new URLSearchParams(window.location.search);
  let namaTamu = urlParams.get('to');

  if (namaTamu) {
    // Mengubah teks menjadi format Title Case (Huruf Kapital di Awal Kata)
    namaTamu = namaTamu.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    
    document.getElementById('guesNameDisplay').innerText = namaTamu;
  }













// SAMPUL PEMBUKA
document.addEventListener('DOMContentLoaded', function() {
  const splashScreen = document.getElementById('splashScreen');
  const openBtn = document.getElementById('openInvitationBtn');
  const body = document.body;
  
  // Nonaktifkan scroll saat splash screen aktif
  body.style.overflow = 'hidden';
  
  // Fungsi untuk membuka undangan
  function openInvitation() {
    // Tambahkan class untuk animasi keluar
    splashScreen.classList.add('hidden');
    
    // Aktifkan scroll kembali
    setTimeout(() => {
      body.style.overflow = 'auto';
      // Scroll halus ke cover utama

    }, 800);
    
    // Hapus splash screen dari DOM setelah animasi
    setTimeout(() => {
      splashScreen.style.display = 'none';
    }, 1500);
  }
  
  // Event listener untuk tombol
  openBtn.addEventListener('click', openInvitation);
  
  // Event listener untuk klik di mana saja di splash screen
  splashScreen.addEventListener('click', function(e) {
    // Hanya jika bukan klik pada tombol (karena sudah ada handler)
    if (e.target !== openBtn && !openBtn.contains(e.target)) {
      openInvitation();
    }
  });
  
  // Event listener untuk tombol keyboard
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
      openInvitation();
    }
  });
  
  

  setTimeout(() => {
    splashScreen.classList.add('loaded');
  }, 100);

});
