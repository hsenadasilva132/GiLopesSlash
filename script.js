window.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector(".video-bg");
    video.playbackRate = 0.8;
});

function typeWriter(text, element, speed = 90) {
    let i = 0;
    function escrever() {
        if(i < text.length) {
            element.innerHTML += text.charAt(i); // Adiciona uma letra por vez
            i++;
            setTimeout(escrever, speed); // Espera um pouco antes de escrever a próxima
        } else {
            element.style.borderRight = "none"; // Remove o cursor no final
        }
    }
    escrever();
}

const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const el = entry.target;
            const texto = el.textContent;
            el.textContent = ""; // Limpa o texto antes de digitar
            typeWriter(texto, el); // Chama a função de digitação
            obs.unobserve(el); // Para de digitar depois de executar uma vez
        }
    });
}, {threshold: 0.6});

const titulo = document.getElementById("titulo-digitado");
observer.observe(titulo);