const playlistContainer = document.getElementById('playlist');
const voltarBtn = document.getElementById('voltarBtn');

// Array com as músicas (substitua pelos seus dados)
const musicas = [
  { titulo: "Música 1", artista: "Artista 1", capa: "capa1.jpg" },
  { titulo: "Música 2", artista: "Artista 2", capa: "capa2.jpg" },
  // ... adicione mais músicas aqui
];

// Função para criar elementos de música
function criarElementoMusica(musica) {
  const divMusica = document.createElement('div');
  divMusica.classList.add('musica');
  divMusica.innerHTML = `
    <img src="${musica.capa}" alt="${musica.titulo}">
    <h3>${musica.titulo}</h3>
    <p>${musica.artista}</p>
  `;
  return divMusica;
}

// Adicionar músicas à playlist
musicas.forEach(musica => {
  const elementoMusica = criarElementoMusica(musica);
  playlistContainer.appendChild(elementoMusica);
});


