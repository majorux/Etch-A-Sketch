const container = document.getElementById('container');

let int = 0;
function getInput(){
  int = Number(prompt('how many grids per side? must be under 100!'));
  if(int > 100){
    getInput();
  }
  const removeChilds = (parent) => {
    while (parent.lastChild){
      parent.removeChild(parent.lastChild)
    }
  };
  removeChilds(container);
  changeGrid(); 
};



function changeGrid(){ 
  function forRow(){
    for(i = 0; i <(int | 32); i++){ 
      const row_grid = document.createElement('div');
      row_grid.classList.add('row');
      row_grid.classList.add('grid');
      container.append(row_grid);
    };
  }
  forRow();

  const rows = document.querySelectorAll('.row');
  rows.forEach(element => {
    for(i = 0; i <(int | 32); i++){ 
      const columns_grid = document.createElement('div');
      columns_grid.classList.add('column');
      columns_grid.classList.add('grid');
      element.append(columns_grid);
    };
  });
  const columns = document.querySelectorAll('.column')
  columns.forEach(element => {
    element.addEventListener('mouseenter', (event) => {
      event.target.classList.add('hovering')
    })
  })
};
changeGrid();

