
function alertview({message}){
    if (!message) return null; // Si no hay mensaje, no renderiza nada
  
  
    return (
      <div class="alert alert-danger" role="alert">
  {message}
</div>
    );

}

export default alertview;