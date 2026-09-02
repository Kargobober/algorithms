const canvas = document.getElementById('dvdCanvas') as HTMLCanvasElement;

// Устанавливаем размер холста на весь экран
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Настройки логотипа
const rect = {
  x: 200,
  y: 200,
  width: 120,
  height: 60,
  dx: 4, // Скорость по X
  dy: 4, // Скорость по Y
  color: '#00ff00',
};

// Список цветов для смены при ударе
const colors = [
  '#ff0055',
  '#00ff55',
  '#0055ff',
  '#ffff00',
  '#ff00ff',
  '#00ffff',
  '#ffffff',
];

function getRandomColor(): string {
  const availableColors = colors.filter((c) => c !== rect.color);
  return availableColors[Math.floor(Math.random() * availableColors.length)]!;
}

function update() {
  // Движение
  rect.x += rect.dx;
  rect.y += rect.dy;

  let hitWall = false;

  // Отскок от левой и правой границы
  if (rect.x <= 0 || rect.x + rect.width >= canvas.width) {
    rect.dx = -rect.dx;
    hitWall = true;
  }

  // Отскок от верхней и нижней границы
  if (rect.y <= 0 || rect.y + rect.height >= canvas.height) {
    rect.dy = -rect.dy;
    hitWall = true;
  }

  // Меняем цвет при ударе об любую стену
  if (hitWall) {
    rect.color = getRandomColor();
  }
}

function draw() {
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    return;
  }

  // Очистка экрана
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Рисуем элемент (прямоугольник с текстом вместо реального логотипа)
  ctx.fillStyle = rect.color;
  ctx.fillRect(rect.x, rect.y, rect.width, rect.height);

  // Текст внутри прямоугольника
  ctx.fillStyle = '#000';
  ctx.font = 'bold 20px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('DVD', rect.x + rect.width / 2, rect.y + rect.height / 2);
}

function animate() {
  update();
  draw();
  requestAnimationFrame(animate);
}

// Запуск анимации
animate();
