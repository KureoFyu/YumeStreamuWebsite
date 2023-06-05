const animename = [
  {
    id: 0,
    image: 'image11711-mq0t-300h.png',
    title: 'Azur Lane The Animation',
    link: 'AzurLanePreview.html', // Tambahkan properti 'link' untuk menentukan halaman tujuan
  },
  {
    id: 1,
    image: 'image62155-dwzd-300h.png',
    title: 'Yuru Camp',
  },
  {
    id: 2,
    image: 'image72156-8fx9-300h.png',
    title: 'Bocchi The Rock',
  },
];
const categories = [...new Set(animename.map((item) => item))];

document.getElementById('sidebar').addEventListener('keyup', (e) => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = categories.filter((item) =>
    item.title.toLowerCase().includes(searchData)
  );
  displayItem(filteredData);
});

const displayItem = (items) => {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = items
      .map((item) => {
        const { image, title, link } = item; // Menambahkan 'link' pada objek item
        return `
          <div class="item">
            <a href="${link}"> <!-- Menggunakan tautan yang ditentukan pada properti 'link' -->
              <img src="${image}" alt="${title}" />
              <h3>${title}</h3>
            </a>
          </div>
        `;
      })
      .join('');
  }
};

// Panggil fungsi displayItem dengan data awal saat halaman pertama kali dimuat
displayItem(categories);