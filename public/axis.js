function axis (length) {
    strokeWeight(1);
    // eixo x - vermelho
    stroke('rgba(255, 0, 0, 0.5)');
    line(-length, 0, 0, 0, 0, 0);
    stroke(255, 0, 0);
    line(0, 0, 0, length, 0, 0);

    // eixo y - verde
    stroke('rgba(0, 255, 0, 0.5)');
    line(0, -length, 0, 0, 0, 0);
    stroke(0, 255, 0);
    line(0, 0, 0, 0, length, 0);

    // eixo z - azul
    stroke('rgba(0, 0, 255, 0.5)');
    line(0, 0, -length, 0, 0, 0);
    stroke(0, 0, 255);
    line(0, 0, 0, 0, 0, length);

    noStroke();
}