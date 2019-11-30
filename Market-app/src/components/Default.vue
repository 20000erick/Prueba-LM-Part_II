<template>
  <div class="container">
    <div class="col-md-6">
    <h2>Marketplace</h2>
    <p>Agregue un nuevo producto</p>
    <form role="form" >
  <div class="form-group text-success">
    <label for="email">ID-Producto</label>
    <input type="text" class="form-control" id="producto">
  </div>
  <div class="form-group text-success ">
    <label for="email">Nombre producto</label>
    <input type="text" class="form-control" id="producto">
  </div>
  <div class="form-group text-success">
    <label for="email">Precio</label>
    <input type="text" class="form-control" id="producto">
  </div>
  <div class="form-group text-success ">
    <label for="email">Email address:</label>
    <input type="text" class="form-control" id="producto">
  </div>
  <div class="checkbox">
    <label><input type="checkbox"> Aplica descuento</label>
  </div>
  <button type="submit" class="btn btn-success">Guardar</button>
</form>
</div>
   </div>
</template>

<script>
export default {
  name: 'Default'
}
</script>