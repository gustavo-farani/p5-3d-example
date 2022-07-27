let radius, phi, theta;
let sign;
let speedHorizontal, speedVertical, speedScroll;

function modArc (x) {
    if (x < -PI) {
        x += TWO_PI;
    } else if (x > PI) {
        x -= TWO_PI;
    }
    return x;
}

function mouseWheel (event) {
    radius += event.delta*speedScroll;
}

function setupOrbit () {
    sign = 1;
    radius = 300;
    phi = QUARTER_PI;
    theta = QUARTER_PI;
    speedScroll = 0.2;
    speedHorizontal = 1;
    speedVertical = 1;
}

function updateOrbit (zoom) {
    if (mouseIsPressed && mouseButton == CENTER) {
        phi = modArc(phi + -1*speedVertical*map(movedY, -height, height, -PI, PI));
        theta = modArc(theta + -1*speedHorizontal*sign*map(movedX, -width, width, -PI, PI));
    }
    sign = phi < 0 ? -1 : 1;
    camera(
        radius*cos(theta)*sin(phi), radius*sin(phi)*sin(theta), -radius*cos(phi),
        0, 0, 0,
        0, 0, 1*sign
    );
    // reflete em relação ao plano Oxy (nega o z)
    applyMatrix(
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, -1, 0,
        0, 0, 0, 1
    );
    scale(zoom);
}