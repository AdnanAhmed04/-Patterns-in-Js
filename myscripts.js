document.write('------ left Downward slope------<br>')

star = ' * '
for (let i = 7; i >= 1; i--) {
    document.write(star.repeat(i), '<br>')

}

document.write('------ left Upward slope------<br>')

star = ' * '
for (let i = 1; i <= 7; i++) {
    document.write(star.repeat(i), '<br>')

}
document.write('------Square------<br>')
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        document.write('*')
    }
    document.write('<br>')
}

document.write('------Left side Triangle------<br>')

star = ' * '
for (let i = 1; i <= 7; i++) {
    document.write(star.repeat(i), '<br>')

}
for (let i = 7; i >= 1; i--) {
    document.write(star.repeat(i), '<br>')

}

document.write('------Center Triangle------<br>')
let height = 5;
for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= height - i; j++) {
        document.write('&nbsp;');
    }
    for (let k = 1; k <= i; k++) {
        document.write(' * ');
    }
    document.write('<br>');
}



document.write('------Right downward Triangle------<br>')

for (let i = 1; i <= height; i++) {
    for (let j = 1; j < i; j++) {
        document.write('&nbsp;&nbsp;');
    }
    for (let k = i; k <= height; k++) {
        document.write('*');
    }
    document.write('<br>');
}

document.write('------Right Upward Triangle------<br>')





