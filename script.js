function toggleMenu() {
  document.getElementById("nav-list").classList.toggle("show");
}

document.addEventListener('click', function(event) {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.getElementById('nav-list');
  const hamburger = document.querySelector('.hamburger');
  
  if (!navbar.contains(event.target)) {
    navLinks.classList.remove('show');
  }
});

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const pages = {
  home: `
    <section class="hero fade-in">
      <div class="hero-content">
        <div class="hero-text">
          <h1>Mulai <span class="highlight">Hidup Sehat</span> Hari Ini</h1>
          <p>
            Kesehatan adalah investasi terbaik untuk masa depan. Di Healtylife ini menyajikan panduan lengkap 
            tentang pola makan seimbang, olahraga, kesehatan mental, dan gaya hidup sehat 
            berdasarkan standar internasional dari WHO dan Harvard Medical School.
          </p>
          <button class="hero-cta" onclick="showPage('categories')">Jelajahi</button>
        </div>
        <div class="hero-image">
          <img src="Food.jpg" alt="Healthy Food" class="hero-img">
        </div>
      </div>
    </section>
  `,

  categories: `
    <section class="category-section fade-in">
      <div class="category-header">
        <h2>Panduan Hidup Sehat</h2>
        <p>Jelajahi setiap kategori di bawah ini untuk mempelajari lebih lanjut tentang aspek penting dalam hidup sehat</p>
      </div>
      
      <div class="category-grid">
        <div class="category-card" onclick="showPage('polaMakan')">
          <img src="Healtyfood.jpg" alt="Pola Makan Seimbang" class="category-img">
          <div class="category-content">
            <h3>Pola Makan Seimbang</h3>
            <p>Pelajari komposisi makanan sehat berdasarkan panduan WHO dan Harvard Health.</p>
            <button class="category-btn">Baca Selengkapnya</button>
          </div>
        </div>

        <div class="category-card" onclick="showPage('olahraga')">
          <img src="Olahraga.jpg" alt="Aktivitas Fisik" class="category-img">
          <div class="category-content">
            <h3>Aktivitas Fisik & Olahraga</h3>
            <p>Temukan panduan olahraga yang tepat sesuai rekomendasi CDC dan WHO.</p>
            <button class="category-btn">Baca Selengkapnya</button>
          </div>
        </div>

        <div class="category-card" onclick="showPage('mental')">
          <img src="KesehatanMental.jpg" alt="Kesehatan Mental" class="category-img">
          <div class="category-content">
            <h3>Kesehatan Mental & Tidur</h3>
            <p>Pentingnya tidur berkualitas dan kesehatan mental menurut Harvard Medical School.</p>
            <button class="category-btn">Baca Selengkapnya</button>
          </div>
        </div>

        <div class="category-card" onclick="showPage('hidrasi')">
          <img src="Hidrasi-Air.jpg" alt="Hidrasi" class="category-img">
          <div class="category-content">
            <h3>Hidrasi & Pencernaan</h3>
            <p>Pentingnya hidrasi optimal untuk kesehatan tubuh berdasarkan Mayo Clinic.</p>
            <button class="category-btn">Baca Selengkapnya</button>
          </div>
        </div>

        <div class="category-card" onclick="showPage('vitaminD')">
          <img src="VitaminD.jpg" alt="Vitamin D" class="category-img">
          <div class="category-content">
            <h3>Paparan Sinar Matahari & Vitamin D</h3>
            <p>Manfaat sinar matahari pagi untuk produksi vitamin D alami menurut NIH.</p>
            <button class="category-btn">Baca Selengkapnya</button>
          </div>
        </div>

        <div class="category-card" onclick="showPage('cekRutin')">
          <img src="CekKesehatan.jpg" alt="Cek Kesehatan" class="category-img">
          <div class="category-content">
            <h3>Cek Kesehatan Rutin</h3>
            <p>Pentingnya pemeriksaan kesehatan berkala untuk deteksi dini penyakit.</p>
            <button class="category-btn">Baca Selengkapnya</button>
          </div>
        </div>
      </div>
    </section>
  `,

  kontak: `
    <section class="contact-section fade-in">
      <h2>Hubungi Kami</h2>
      <p>Kami siap membantu menjawab pertanyaan Anda seputar gaya hidup sehat dan nutrisi. Silakan isi formulir di bawah ini.</p>
      <form onsubmit="handleSubmit(event)">
        <div class="form-group">
          <label for="nama">Nama Lengkap</label>
          <input type="text" id="nama" placeholder="Masukkan nama lengkap Anda" required>
        </div>
        <div class="form-group">
          <label for="email">Alamat Email</label>
          <input type="email" id="email" placeholder="Masukkan alamat email" required>
        </div>
        <div class="form-group">
          <label for="pesan">Pesan</label>
          <textarea id="pesan" rows="5" placeholder="Tulis pesan atau pertanyaan Anda di sini..." required></textarea>
        </div>
        <button type="submit" class="submit-btn">Kirim Pesan</button>
      </form>
    </section>
  `,

  
  polaMakan: `
    <section class="detail-section fade-in">
      <div class="detail-header">
        <h2>Pola Makan Seimbang</h2>
      </div>
      
      <img src="Healtyfood.jpg" alt="Pola Makan Seimbang" class="detail-image">
      
      <div class="detail-content">
        <p>
          Berdasarkan panduan <strong>World Health Organization (WHO)</strong> dan
          <strong>Harvard T.H. Chan School of Public Health</strong>, pola makan seimbang berarti memenuhi kebutuhan energi dan zat gizi harian tanpa berlebihan.
        </p>

        <h3>Kebutuhan Kalori Harian Berdasarkan Usia dan Aktivitas</h3>
        <p>
          WHO menyarankan asupan kalori harian yang berbeda-beda tergantung usia, jenis kelamin, dan tingkat aktivitas fisik:
        </p>
        <ul>
          <li><strong>Wanita Dewasa (19-30 tahun):</strong> 1.800-2.400 kalori/hari (aktivitas ringan hingga berat)</li>
          <li><strong>Pria Dewasa (19-30 tahun):</strong> 2.400-3.000 kalori/hari (aktivitas ringan hingga berat)</li>
          <li><strong>Wanita Dewasa (31-50 tahun):</strong> 1.800-2.200 kalori/hari</li>
          <li><strong>Pria Dewasa (31-50 tahun):</strong> 2.200-3.000 kalori/hari</li>
          <li><strong>Wanita di atas 51 tahun:</strong> 1.600-2.200 kalori/hari</li>
          <li><strong>Pria di atas 51 tahun:</strong> 2.000-2.800 kalori/hari</li>
        </ul>
        <p>
          <em>Catatan: Kebutuhan kalori lebih tinggi untuk mereka yang aktif berolahraga, ibu hamil (tambahan 300 kalori), dan ibu menyusui (tambahan 500 kalori).</em>
        </p>

        <h3>Komposisi Ideal "Isi Piring Sehat"</h3>
        <p>
          Menurut Harvard Healthy Eating Plate, berikut adalah komposisi ideal untuk setiap kali makan:
        </p>
        <ul>
          <li><strong>50% Sayur dan Buah Berwarna:</strong> Kaya serat, vitamin, mineral, dan antioksidan. Semakin beragam warnanya, semakin baik untuk kesehatan.</li>
          <li><strong>25% Protein Sehat:</strong> Pilih sumber protein berkualitas seperti ikan (salmon, tuna), telur, ayam tanpa kulit, kacang-kacangan, tempe, dan tahu.</li>
          <li><strong>25% Karbohidrat Kompleks:</strong> Pilih nasi merah, kentang, ubi, quinoa atau gandum utuh yang memberikan energi berkelanjutan.</li>
        </ul>

        <h3>Batasan Gula dan Garam</h3>
        <p>
          Menurut <strong>Harvard Health Publishing</strong>, konsumsi gula tambahan sebaiknya tidak lebih dari 10% total kalori harian (sekitar 50 gram atau 12 sendok teh).
          Konsumsi gula berlebih meningkatkan risiko obesitas, diabetes tipe 2, dan penyakit jantung.
        </p>
        <p>
          WHO merekomendasikan konsumsi garam maksimal <strong>5 gram per hari</strong> (sekitar 1 sendok teh) untuk mencegah hipertensi dan penyakit kardiovaskular.
        </p>

        <h3>Tips Praktis Pola Makan Sehat</h3>
        <ul>
          <li>Makan 3 kali sehari dengan porsi seimbang, tambahkan 2 kali camilan sehat seperti buah atau kacang.</li>
          <li>Minum air putih minimal 8 gelas sehari.</li>
          <li>Kurangi makanan olahan, gorengan, dan makanan cepat saji.</li>
          <li>Perbanyak konsumsi sayuran hijau, buah-buahan segar, dan protein tanpa lemak.</li>
          <li>Masak dengan minyak sehat seperti minyak zaitun atau minyak kelapa.</li>
        </ul>

        <button class="back-btn" onclick="showPage('categories')">Kembali</button>
      </div>
    </section>
  `,

  olahraga: `
    <section class="detail-section fade-in">
      <div class="detail-header">
        <h2>Aktivitas Fisik & Olahraga</h2>
      </div>
      
      <img src="Olahraga.jpg" alt="Olahraga" class="detail-image">
      
      <div class="detail-content">
        <p>
          Berdasarkan <strong>Centers for Disease Control and Prevention (CDC)</strong> dan <strong>World Health Organization (WHO)</strong>,
          aktivitas fisik rutin dapat menurunkan risiko penyakit jantung hingga <strong>35%</strong> dan meningkatkan kesehatan mental hingga <strong>40%</strong>.
          Olahraga teratur juga membantu mengontrol berat badan, meningkatkan kualitas tidur, dan memperkuat sistem imun.
        </p>

        <h3>Rekomendasi Aktivitas Fisik untuk Orang Dewasa</h3>
        <ul>
          <li><strong>Aktivitas Intensitas Sedang:</strong> Minimal 150 menit per minggu (30 menit x 5 hari). Contoh: jalan cepat, bersepeda santai, berenang, atau berkebun.</li>
          <li><strong>Aktivitas Intensitas Berat:</strong> Minimal 75 menit per minggu. Contoh: jogging, lari, HIIT (High-Intensity Interval Training), atau zumba.</li>
          <li><strong>Latihan Kekuatan Otot:</strong> 2-3 kali seminggu untuk semua kelompok otot utama. Contoh: push-up, plank, squat, atau latihan dengan beban ringan.</li>
          <li><strong>Peregangan:</strong> Lakukan peregangan sebelum dan sesudah olahraga untuk mencegah cedera dan meningkatkan fleksibilitas.</li>
        </ul>

        <h3>Manfaat Olahraga Rutin</h3>
        <ul>
          <li>Menurunkan risiko penyakit jantung, stroke, diabetes tipe 2, dan beberapa jenis kanker</li>
          <li>Meningkatkan kesehatan mental, mengurangi stres, kecemasan, dan depresi</li>
          <li>Memperkuat tulang dan otot, mencegah osteoporosis</li>
          <li>Meningkatkan kualitas tidur dan energi sepanjang hari</li>
          <li>Membantu mengontrol berat badan dan meningkatkan metabolisme</li>
        </ul>

        <h3>Tips Memulai Olahraga</h3>
        <p>
          Menurut <strong>Harvard Health</strong>, olahraga pagi meningkatkan metabolisme, suasana hati, dan kualitas tidur di malam hari. 
          Namun, waktu terbaik untuk berolahraga adalah waktu yang paling nyaman dan konsisten untuk Anda.
        </p>
        <ul>
          <li>Mulai dari intensitas ringan dan tingkatkan secara bertahap</li>
          <li>Pilih aktivitas yang Anda nikmati agar lebih konsisten</li>
          <li>Tetapkan jadwal rutin dan buat target yang realistis</li>
          <li>Gunakan pakaian dan sepatu olahraga yang nyaman</li>
          <li>Jangan lupa pemanasan dan pendinginan</li>
        </ul>

        <button class="back-btn" onclick="showPage('categories')">Kembali</button>
      </div>
    </section>
  `,

  mental: `
    <section class="detail-section fade-in">
      <div class="detail-header">
        <h2>Kesehatan Mental & Tidur</h2>
      </div>
      
      <img src="KesehatanMental.jpg" alt="Kesehatan Mental" class="detail-image">
      
      <div class="detail-content">
        <p>
          Menurut <strong>Harvard Medical School (2024)</strong> dan <strong>World Health Organization (WHO)</strong>,
          tidur berkualitas adalah fondasi utama kesehatan otak dan emosi. Tidur yang cukup dan berkualitas meningkatkan fokus, daya ingat, kreativitas, dan kestabilan mood.
        </p>

        <h3>Kebutuhan Tidur Berdasarkan Usia</h3>
        <p>
          <strong>National Sleep Foundation</strong> dan <strong>CDC</strong> merekomendasikan durasi tidur yang berbeda untuk setiap kelompok usia:
        </p>
        <ul>
          <li><strong>Remaja (14-17 tahun):</strong> 8-10 jam per malam</li>
          <li><strong>Dewasa Muda (18-25 tahun):</strong> 7-9 jam per malam</li>
          <li><strong>Dewasa (26-64 tahun):</strong> 7-9 jam per malam</li>
          <li><strong>Lansia (65+ tahun):</strong> 7-8 jam per malam</li>
        </ul>
        <p>
          <em>Catatan: Tidur kurang dari 6 jam atau lebih dari 10 jam secara konsisten dapat meningkatkan risiko penyakit jantung, diabetes, dan obesitas.</em>
        </p>

         <h3>Kualitas Tidur yang Baik</h3>
        <p>
          Selain durasi, kualitas tidur juga sangat penting. Berikut adalah tanda-tanda tidur berkualitas menurut Harvard Health:
        </p>
        <ul>
          <li><strong>Tertidur dalam 15-20 menit</strong> setelah berbaring</li>
          <li><strong>Tidur nyenyak tanpa terbangun</strong> lebih dari sekali di malam hari</li>
          <li><strong>Jika terbangun, bisa tidur kembali dalam 20 menit</strong></li>
          <li><strong>Bangun dengan segar</strong> dan berenergi di pagi hari</li>
          <li><strong>Tidak mengantuk berlebihan</strong> di siang hari</li>
          <li><strong>Mencapai fase REM dan deep sleep</strong> yang cukup (25% dan 20% dari total tidur)</li>
        </ul>

        <h3>Dampak Kurang Tidur</h3>
        <p>
          Riset <strong>UC Berkeley</strong> oleh Dr. Matthew Walker menunjukkan bahwa kurang tidur 1 malam saja dapat:
        </p>
        <ul>
          <li>Menurunkan aktivitas otak frontal hingga <strong>40%</strong>, area yang mengatur pengambilan keputusan</li>
          <li>Meningkatkan hormon stres kortisol yang memicu kecemasan</li>
          <li>Memperburuk regulasi emosi dan meningkatkan reaktivitas emosional</li>
          <li>Menurunkan sistem imun dan meningkatkan risiko penyakit</li>
        </ul>

        <h3>Pentingnya Kesehatan Mental</h3>
        <p>
          WHO melaporkan <strong>1 dari 8 orang</strong> di dunia mengalami gangguan mental, dan kurang tidur kronis menjadi salah satu pemicu utama. 
          Tidur cukup terbukti memperkuat sistem imun dan menurunkan risiko depresi hingga <strong>40%</strong>.
        </p>

        <h3>Panduan Sleep Hygiene (Kebersihan Tidur)</h3>
        <ul>
          <li><strong>Jadwal Konsisten:</strong> Tidur dan bangun pada jam yang sama setiap hari, bahkan di akhir pekan</li>
          <li><strong>Hindari Kafein:</strong> Batasi konsumsi kafein 6-8 jam sebelum tidur</li>
          <li><strong>Batasi Layar:</strong> Hindari gadget, TV, dan layar terang minimal 1 jam sebelum tidur</li>
          <li><strong>Ciptakan Lingkungan Ideal:</strong> Kamar yang gelap, sejuk (18-20°C), dan tenang</li>
          <li><strong>Rutinitas Relaksasi:</strong> Mandi air hangat, membaca buku, meditasi, atau pernapasan dalam</li>
          <li><strong>Hindari Makan Berat:</strong> Jangan makan 2-3 jam sebelum tidur</li>
          <li><strong>Olahraga Teratur:</strong> Namun hindari olahraga berat 3-4 jam sebelum tidur</li>
        </ul>

        <h3>Tips Menjaga Kesehatan Mental</h3>
        <ul>
          <li>Praktikkan mindfulness dan meditasi 10-15 menit sehari</li>
          <li>Jaga hubungan sosial yang sehat dengan keluarga dan teman</li>
          <li>Kelola stres dengan baik melalui hobi atau aktivitas menyenangkan</li>
          <li>Jangan ragu mencari bantuan profesional jika diperlukan</li>
          <li>Batasi paparan berita negatif dan media sosial</li>
        </ul>

        <button class="back-btn" onclick="showPage('categories')">Kembali</button>
      </div>
    </section>
  `,

  hidrasi: `
    <section class="detail-section fade-in">
      <div class="detail-header">
        <h2>Hidrasi & Pencernaan</h2>
      </div>
      
      <img src="Hidrasi-Air.jpg" alt="Hidrasi" class="detail-image">
      
      <div class="detail-content">
        <p>
          Tubuh manusia terdiri atas <strong>60-70% air</strong>, dan kehilangan <strong>2% cairan</strong> saja bisa menurunkan konsentrasi, 
          kinerja fisik, dan metabolisme tubuh. Air berperan vital dalam hampir setiap fungsi tubuh, mulai dari transportasi nutrisi, 
          pengaturan suhu, hingga detoksifikasi.
        </p>

        <h3>Kebutuhan Hidrasi Harian</h3>
        <p>
          <strong>World Health Organization (WHO)</strong> menyarankan konsumsi <strong>2-2,5 liter air putih per hari</strong> untuk orang dewasa 
          (sekitar 8-10 gelas). Kebutuhan ini bisa meningkat tergantung:
        </p>
        <ul>
          <li>Tingkat aktivitas fisik (olahraga memerlukan tambahan 0.5-1 liter)</li>
          <li>Cuaca dan suhu lingkungan (lebih panas = lebih banyak cairan)</li>
          <li>Kondisi kesehatan (demam, diare, muntah memerlukan hidrasi ekstra)</li>
          <li>Kehamilan dan menyusui (tambahan 0.3-1 liter)</li>
        </ul>

        <h3>Manfaat Hidrasi Optimal</h3>
        <p>
          Menurut <strong>Mayo Clinic (2023)</strong>, hidrasi yang baik memberikan manfaat:
        </p>
        <ul>
          <li><strong>Sistem Pencernaan:</strong> Membantu pencernaan bekerja optimal, mencegah sembelit, dan melancarkan BAB</li>
          <li><strong>Fungsi Otak:</strong> Meningkatkan konsentrasi, fokus, dan daya ingat hingga 30%</li>
          <li><strong>Kesehatan Kulit:</strong> Menjaga kelembaban dan elastisitas kulit</li>
          <li><strong>Detoksifikasi:</strong> Membantu ginjal mengeluarkan racun dan limbah metabolisme</li>
          <li><strong>Sirkulasi Darah:</strong> Menjaga tekanan darah normal dan sirkulasi oksigen ke seluruh tubuh</li>
          <li><strong>Sendi dan Otot:</strong> Menjaga pelumasan sendi dan mencegah kram otot</li>
        </ul>

        <h3>Tips Hidrasi Sehat</h3>
        <ul>
          <li>Minumlah air putih minimal 8-10 gelas sehari secara bertahap</li>
          <li>Mulai hari dengan 1-2 gelas air hangat untuk "membangunkan" pencernaan</li>
          <li>Minum air sebelum, selama, dan setelah olahraga</li>
          <li>Batasi minuman manis, soda, dan alkohol yang dapat menyebabkan dehidrasi</li>
          <li>Konsumsi makanan kaya air seperti semangka, timun, tomat, dan sup bening</li>
          <li>Perhatikan warna urin: jika kuning pucat berarti hidrasi baik, kuning pekat berarti kurang air</li>
        </ul>

        <h3>Kesehatan Pencernaan</h3>
        <p>
          Sistem pencernaan yang sehat memerlukan kombinasi hidrasi cukup, serat (25-30 gram/hari), 
          probiotik (yogurt, tempe), dan aktivitas fisik teratur. Hindari makanan olahan berlebihan dan 
          perbanyak konsumsi makanan fermentasi untuk kesehatan mikrobioma usus.
        </p>

        <button class="back-btn" onclick="showPage('categories')">Kembali</button>
      </div>
    </section>
  `,

  vitaminD: `
    <section class="detail-section fade-in">
      <div class="detail-header">
        <h2>Paparan Sinar Matahari & Vitamin D</h2>
      </div>
      
      <img src="VitaminD.jpg" alt="Sinar Matahari" class="detail-image">
      
      <div class="detail-content">
        <p>
          Berdasarkan <strong>Mayo Clinic (2023)</strong> dan <strong>NIH (National Institutes of Health)</strong>,
          paparan sinar matahari pagi membantu tubuh menghasilkan <strong>vitamin D alami</strong> yang sangat penting 
          untuk kesehatan tulang, sistem imun, mood, dan fungsi tubuh lainnya.
        </p>

        <h3>Peran Vitamin D dalam Tubuh</h3>
        <ul>
          <li><strong>Kesehatan Tulang:</strong> Membantu penyerapan kalsium dan fosfor, mencegah osteoporosis dan rakitis</li>
          <li><strong>Sistem Imun:</strong> Meningkatkan respons imun terhadap infeksi dan penyakit</li>
          <li><strong>Kesehatan Mental:</strong> Defisiensi vitamin D dikaitkan dengan depresi dan gangguan mood</li>
          <li><strong>Kesehatan Jantung:</strong> Membantu mengatur tekanan darah dan fungsi kardiovaskular</li>
          <li><strong>Pencegahan Penyakit:</strong> Mengurangi risiko diabetes tipe 2, multiple sclerosis, dan beberapa jenis kanker</li>
        </ul>

        <h3>Panduan Paparan Sinar Matahari yang Aman</h3>
        <p>
          Waktu terbaik untuk berjemur dan mendapatkan manfaat maksimal vitamin D:
        </p>
        <ul>
          <li><strong>Waktu Ideal:</strong> Pukul 07.00-09.00 pagi (sinar UVB optimal, UVA minimal)</li>
          <li><strong>Durasi:</strong> 10-20 menit untuk kulit terang, 20-30 menit untuk kulit gelap</li>
          <li><strong>Area Kulit:</strong> Ekspos minimal 40% permukaan kulit (lengan, kaki, punggung)</li>
          <li><strong>Frekuensi:</strong> 2-3 kali per minggu sudah cukup untuk memenuhi kebutuhan vitamin D</li>
        </ul>

        <h3>Perlindungan dari Sinar Matahari Berlebihan</h3>
        <p>
          Meskipun sinar matahari penting, paparan berlebihan dapat berbahaya:
        </p>
        <ul>
          <li>Gunakan tabir surya SPF 30+ jika paparan lebih dari 20 menit</li>
          <li>Hindari paparan sinar matahari langsung antara pukul 10.00-16.00 (sinar UVA tinggi)</li>
          <li>Gunakan topi, kacamata hitam, dan pakaian pelindung saat beraktivitas di luar</li>
          <li>Cari tempat teduh saat berada di luar ruangan dalam waktu lama</li>
        </ul>

        <h3>Sumber Vitamin D dari Makanan</h3>
        <p>
          Selain dari sinar matahari, vitamin D juga bisa didapatkan dari makanan:
        </p>
        <ul>
          <li><strong>Ikan Berlemak:</strong> Salmon, tuna, mackerel, sarden (sangat tinggi vitamin D)</li>
          <li><strong>Telur:</strong> Terutama kuning telur</li>
          <li><strong>Susu Fortifikasi:</strong> Susu yang diperkaya vitamin D</li>
          <li><strong>Sereal Fortifikasi:</strong> Beberapa sereal sarapan yang diperkaya</li>
          <li><strong>Jamur:</strong> Terutama jamur yang dipapar sinar UV</li>
        </ul>

        <h3>Tanda-tanda Defisiensi Vitamin D</h3>
        <ul>
          <li>Kelelahan kronis dan lemah</li>
          <li>Nyeri tulang dan otot</li>
          <li>Mood rendah atau depresi</li>
          <li>Sering sakit atau infeksi</li>
          <li>Penyembuhan luka yang lambat</li>
        </ul>

        <p>
          <em>Catatan:Kebutuhan vitamin D harian adalah 600-800 IU untuk orang dewasa. 
          Jika Anda jarang terpapar sinar matahari, konsultasikan dengan dokter tentang suplementasi vitamin D.</em>
        </p>

        <button class="back-btn" onclick="showPage('categories')">Kembali</button>
      </div>
    </section>
  `,

  cekRutin: `
    <section class="detail-section fade-in">
      <div class="detail-header">
        <h2>Cek Kesehatan Rutin</h2>
      </div>
      
      <img src="CekKesehatan.jpg" alt="Cek Kesehatan" class="detail-image">
      
      <div class="detail-content">
        <p>
          Menurut <strong>Kementerian Kesehatan RI</strong> dan <strong>World Health Organization (WHO)</strong>,
          pemeriksaan kesehatan berkala (medical check-up) adalah kunci pencegahan dan deteksi dini penyakit. 
          Banyak penyakit serius seperti diabetes, hipertensi, kolesterol tinggi, dan kanker tidak menunjukkan gejala 
          di tahap awal, sehingga pemeriksaan rutin sangat penting.
        </p>

        <h3>Manfaat Pemeriksaan Kesehatan Rutin</h3>
        <ul>
          <li><strong>Deteksi Dini:</strong> Menemukan penyakit sebelum gejala muncul, saat masih mudah diobati</li>
          <li><strong>Pencegahan:</strong> Mengidentifikasi faktor risiko dan mengambil tindakan pencegahan</li>
          <li><strong>Menurunkan Risiko Komplikasi:</strong> Pemeriksaan dini menurunkan risiko komplikasi hingga 40%</li>
          <li><strong>Memperpanjang Usia Harapan Hidup:</strong> Deteksi dini dapat memperpanjang usia harapan hidup (Harvard Health, 2024)</li>
          <li><strong>Hemat Biaya:</strong> Lebih murah mencegah daripada mengobati penyakit stadium lanjut</li>
        </ul>

        <h3>Jenis Pemeriksaan Kesehatan yang Direkomendasikan</h3>
        
        <h4>Pemeriksaan Dasar (untuk semua usia dewasa):</h4>
        <ul>
          <li><strong>Tekanan Darah:</strong> Minimal 2 kali per tahun untuk deteksi hipertensi</li>
          <li><strong>Gula Darah:</strong> Minimal 1-2 kali per tahun, terutama jika ada riwayat keluarga diabetes</li>
          <li><strong>Kolesterol:</strong> Setiap 4-6 tahun untuk usia 20-39 tahun, lebih sering untuk usia 40+</li>
          <li><strong>Indeks Massa Tubuh (BMI):</strong> Pantau berat badan dan tinggi badan secara berkala</li>
          <li><strong>Pemeriksaan Mata:</strong> Setiap 1-2 tahun untuk mendeteksi gangguan penglihatan</li>
          <li><strong>Pemeriksaan Gigi:</strong> Minimal 2 kali per tahun untuk kesehatan mulut</li>
        </ul>

        <h4>Pemeriksaan Lanjutan (sesuai usia dan faktor risiko):</h4>
        <ul>
          <li><strong>Usia 30+:</strong> Skrining kanker serviks (Pap smear) untuk wanita setiap 3 tahun</li>
          <li><strong>Usia 40+:</strong> Mamografi untuk deteksi kanker payudara (wanita), pemeriksaan prostat (pria)</li>
          <li><strong>Usia 45+:</strong> Kolonoskopi untuk skrining kanker usus besar</li>
          <li><strong>Usia 50+:</strong> Tes fungsi hati, ginjal, dan kelenjar tiroid</li>
          <li><strong>Riwayat Keluarga:</strong> Pemeriksaan genetik jika ada riwayat penyakit turunan</li>
        </ul>

        <h3>Medical Check-Up Berkala</h3>
        <p>
          WHO dan Kementerian Kesehatan RI merekomendasikan medical check-up lengkap:
        </p>
        <ul>
          <li><strong>Usia 20-39 tahun:</strong> Setiap 2-3 tahun jika sehat, setiap tahun jika ada faktor risiko</li>
          <li><strong>Usia 40-64 tahun:</strong> Setiap 1-2 tahun</li>
          <li><strong>Usia 65+ tahun:</strong> Setiap tahun atau sesuai anjuran dokter</li>
        </ul>

        <h3>Vaksinasi Rutin untuk Orang Dewasa</h3>
        <ul>
          <li><strong>Influenza:</strong> Setiap tahun untuk mencegah flu</li>
          <li><strong>Tetanus-Difteri:</strong> Booster setiap 10 tahun</li>
          <li><strong>HPV:</strong> Untuk mencegah kanker serviks (usia 9-45 tahun)</li>
          <li><strong>Hepatitis B:</strong> 3 dosis jika belum pernah divaksin</li>
          <li><strong>COVID-19:</strong> Sesuai dengan rekomendasi terkini</li>
        </ul>

        <h3>Tips Mempersiapkan Medical Check-Up</h3>
        <ul>
          <li>Puasa 8-12 jam sebelum pemeriksaan darah (jika diperlukan)</li>
          <li>Bawa hasil pemeriksaan sebelumnya untuk perbandingan</li>
          <li>Buat daftar obat-obatan yang sedang dikonsumsi</li>
          <li>Catat gejala atau keluhan yang dialami</li>
          <li>Siapkan pertanyaan untuk dokter</li>
          <li>Gunakan pakaian yang nyaman dan mudah dilepas</li>
        </ul>

        <h3>Pentingnya Konsultasi dengan Dokter</h3>
        <p>
          Jangan ragu untuk berkonsultasi dengan dokter jika mengalami:
        </p>
        <ul>
          <li>Perubahan berat badan drastis tanpa sebab jelas</li>
          <li>Kelelahan yang tidak biasa atau berkepanjangan</li>
          <li>Nyeri yang terus-menerus atau semakin parah</li>
          <li>Perubahan pada kulit, tahi lalat, atau benjolan</li>
          <li>Gangguan pencernaan berkepanjangan</li>
          <li>Perubahan mood yang signifikan</li>
        </ul>

        <button class="back-btn" onclick="showPage('home')">Kembali</button>
      </div>
    </section>
  `
};


function showPage(page) {
  const main = document.getElementById('main-content');
  document.getElementById('nav-list').classList.remove('show');
  main.classList.add('fade-out');
  setTimeout(() => {
    main.innerHTML = pages[page];
    main.classList.remove('fade-out');
    main.classList.add('fade-in');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
      main.classList.remove('fade-in');
    }, 600);
  }, 300);
}


function handleSubmit(event) {
  event.preventDefault();
  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;
  const pesan = document.getElementById('pesan').value;
  
  alert("Terimakasih ${nama}! Pesan Anda telah berhasil dikirim.\n\nKami akan segera menghubungi Anda melalui ${email}.");
  
  event.target.reset();
}

document.addEventListener('DOMContentLoaded', function() {
  showPage('home');
});