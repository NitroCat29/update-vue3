<template>
  <div class="box-container">
    <div class="box">
      <h3 class="box-title">Fast</h3>
      <p class="box-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <div class="box">
      <h3 class="box-title">Lightweight</h3>
      <p class="box-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
    <div class="box">
      <h3 class="box-title">No-Install</h3>
      <p class="box-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  </div>
</template>

<style>
.box-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.box {
  width: 200px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.box-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.box-description {
  font-size: 1rem;
  line-height: 1.5rem;
}
</style>
