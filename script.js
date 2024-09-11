const bt1 = document.getElementById("bt1");
const bt2 = document.getElementById("bt2");
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const voto = document.getElementById("voto");
const confirma = document.getElementById("confirma");
const imgPb = document.getElementById("image-pb");
const imgCor = document.getElementById("image-cor");


let res = 0;

bt1.addEventListener('click', () => {
    if (res == 0) {
        n1.style.opacity = 1;
        res = 1
    }
});

bt2.addEventListener('click', () => {
    if (res == 1) {
        n2.style.opacity = 1;
        res = 2
        voto.style.display = "none";
        imgPb.style.opacity = 1;
    }
});

confirma.addEventListener('click', () => {
    if (res == 2) {
        imgPb.style.display = "none";
        imgCor.style.opacity = 1;
        animacao()
        res = 3
    }
});

function animacao() {
    var scalar = 2;
    var heart = confetti.shapeFromText({ text: '❤️', scalar });

    var defaults = {
        spread: 720,
        ticks: 60,
        gravity: 0,
        decay: 0.96,
        startVelocity: 10,
        shapes: [heart],
        scalar
    };

    function shoot() {
        confetti({
            ...defaults,
            particleCount: 30
        });

        confetti({
            ...defaults,
            particleCount: 20,
            flat: true
        });

        confetti({
            ...defaults,
            particleCount: 15,
            scalar: scalar / 2,
            shapes: ['circle']
        });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
    setTimeout(shoot, 400);
    setTimeout(shoot, 800);
    setTimeout(shoot, 1200);
    setTimeout(shoot, 1600);
    setTimeout(shoot, 2000);
    setTimeout(shoot, 2400);
    setTimeout(shoot, 2800);
    setTimeout(shoot, 3200);
    setTimeout(shoot, 3600);
}

