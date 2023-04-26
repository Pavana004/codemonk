const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const radius = 30;
const lineWidth = 2;
const strokeStyle = 'black';
const fillStyle = 'white';

// Add a mousemove event listener 
canvas.addEventListener('mousemove', e => {
  
 // Get the mouse position
  const x = e.clientX - canvas.offsetLeft;
  const y = e.clientY - canvas.offsetTop;
  
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  

// Level 1
// The circle is drawn only around the user's mouse position.
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = strokeStyle;
  ctx.fillStyle = fillStyle;
  ctx.stroke();
  ctx.fill();
  
// Level 2
// The canvas is divided into two halves and on user's mouse over one half, a mirror image of the circle is shown in the other half.
  ctx.beginPath();
  ctx.arc(canvas.width - x, y, radius, 0, 2 * Math.PI);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = strokeStyle;
  ctx.fillStyle = fillStyle;
  ctx.stroke();
  ctx.fill();
  
  
// Level 3
// The canvas is divided into four quadrants and on user's mouse over one quadrant, and a mirror image of the circle is shown in other three quadrants.
  ctx.beginPath();
  ctx.arc(x, canvas.height - y, radius, 0, 2 * Math.PI);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = strokeStyle;
  ctx.fillStyle = fillStyle;
  ctx.stroke();
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(canvas.width - x, canvas.height - y, radius, 0, 2 * Math.PI);
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = strokeStyle;
  ctx.fillStyle = fillStyle;
  ctx.stroke();
  ctx.fill();
  
//canvas into four quadrants
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.stroke();
});
