window.addEventListener('DOMContentLoaded', () => {
  const sigilElement = document.getElementById('sigil');
  const ctx = sigilElement.getContext('2d');

  const centerX = sigilElement.width / 2;
  const centerY = sigilElement.height / 2;
  const radius = sigilElement.width / 2 - 10;

  const points = [
    { x: centerX, y: centerY - radius },
    { x: centerX + radius, y: centerY - radius / 2 },
    { x: centerX + radius, y: centerY + radius / 2 },
    { x: centerX, y: centerY + radius },
    { x: centerX - radius, y: centerY + radius / 2 },
    { x: centerX - radius, y: centerY - radius / 2 },
  ];

  ctx.font = '16px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  for (let i = 0; i < points.length; i++) {
    ctx.beginPath();
    ctx.arc(points[i].x, points[i].y, 20, 0, Math.PI * 2);
    ctx.fillText(i + 1, points[i].x, points[i].y);
    ctx.stroke();
  }

  const letters = ['S', 'R', 'C', 'N', 'T', 'D', 'P', 'L', 'S', 'R', 'S', 'P', 'R', 'X', 'M', 'M'];
  ctx.beginPath();
  ctx.moveTo(points[letters[0] - 1].x, points[letters[0] - 1].y);

  for (let i = 1; i < letters.length; i++) {
    ctx.lineTo(points[letters[i] - 1].x, points[letters[i] - 1].y);
  }

  ctx.strokeStyle = 'red';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Carregue e libere o sigilo (substitua com seu método escolhido)
  // ...
});
