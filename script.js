const container = document.getElementById('container');

function forRow(){
  for(i = 0; i <16; i++){ 
    const row_grid = document.createElement('div');
    row_grid.classList.add('row');
    container.append(row_grid);
  };
}
forRow();

const rows = document.querySelectorAll('.row');
rows.forEach(element => {
  for(i = 0; i <16; i++){ 
    const columns_grid = document.createElement('div');
    columns_grid.classList.add('column');
    element.append(columns_grid);
  };
});
const columns = document.querySelectorAll('.column')
columns.forEach(element => {
  element.addEventListener('mouseenter', (event) => {
    event.target.classList.add('hovering')
  })
})