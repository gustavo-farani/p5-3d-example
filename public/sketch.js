function setup() {
    // canvas 3D
    createCanvas(windowWidth - 15, windowHeight - 20, WEBGL);
    setupOrbit();
}

function draw () {
    /* Constantes */
    
    // Velocidade de translação vertical 
    const v = 1.0;

    // Velocidade angular de rotação em torno do eixo vertical
    const omega = 2*v;

    // Raio do cilindro
    const r = 1;

    // Altura do cilindro
    const h = 3*HALF_PI;

    // Tempo t (em segundos) transcorrido desde o início da animação
    let t = millis()/1000;

    // Apaga tudo que foi desenhado na tela no frame anterior (detalhe importante!)
    // E coloca um plano de fundo branco
    background('white');
    
    // Reposiciona a câmera de acordo com o movimento do mouse
    // E reinicializa a matriz (detalhe importante!)
    updateOrbit(100);

    /* Movimento da partícula */

    // Sistema de coordenadas no centro do cilindro
    translate(0, r, 0);

    // Rotação no plano Oxy (em torno do eixo Z), o arco (em radianos) é função de t
    rotateZ(omega*t);

    /* Representa a partícula como um ponto preto */
    strokeWeight(5);
    stroke('black');
    point(r, 0, v*t);

    // Reposiciona a câmera de acordo com o movimento do mouse
    // E reinicializa a matriz (detalhe importante!)
    updateOrbit(100);

    // Eixos X, Y, Z coloridos de R, G, B
    axis(1);

    /* Borda inferior do cilindro */
    stroke('blue');
    noFill();
    ellipse(0, r, 2*r, 2*r);

    /* Borda superior do cilindro */
    translate(0, 0, h);
    stroke('black');
    ellipse(0, r, 2*r, 2*r);

    // Desfazendo
    translate(0, 0, -h);

    /* O corpo do cilindro */
    translate(0, r, h/2);
    rotateX(HALF_PI);

    // Cor de preenchimento: ciano transparente
    fill('rgba(0, 255, 255, 0.4)');
    noStroke();

    // Shading básico
    lights();

    cylinder(r, h);
}