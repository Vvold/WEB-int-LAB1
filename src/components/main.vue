<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand"><img src="../../logo.png"
                                   alt="png"
                                   width="25"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link" href="#">Work Page</a>
          <a class="nav-link" href="about.vue">About Us</a>
          <a class="nav-link" href="profile.vue">Profile</a>
          <a class="nav-link" href="../../index.html">EXIT</a>
        </div>
      </div>
    </div>
  </nav>

  <div class="container wrapper">
    <div class="row">
      <div class="col">
        <div class="card bg-dark mb-3 todo-card">
          <div class="row card-header text-white text-center">
            <div class="col h1">Phone Directory</div>
          </div>
          <div class="card-body">
            <div class="text-center">
              <button type="button"
                      id="add-todo-btn"
                      class="btn btn-primary add-todo-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#add_todo_item_modal">
                Add phone number
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="add_todo_item_modal" tabindex="-1" aria-labelledby="add_todo_item_modal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="add_todo_item_modal_label">Add Phone number</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form action="/">
            <div class="form-floating mb-3">
              <input type="text" class="form-control" id="Name" placeholder="Name">
              <label for="Name">Name</label>
            </div>
            <div class="form-floating">
              <input type="text" class="form-control bfh-phone" data-format="+38 (ddd) ddd dd-dd">
              <label>Number</label>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-primary btn-dark">Save</button>
        </div>
      </div>
    </div>
  </div>

  <div class="container wrapper">
    <div class="row">
      <div class="col">
        <div class="card bg-dark mb-3 todo-card">
          <div class="row card-header text-white text-center">
            <div class="col h4">list of phone numbers <a class="btn btn-primary">Sort</a></div>
          </div>
          <div class="card-body">
            <div class="todo-item text-white">
              <div class="actions">
                <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
              </div>
              <p>Oleg Nechipurenko</p>
              <p>+3809645341267</p>
            </div>
            <div class="todo-item text-white">
              <div class="actions">
                <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
              </div>
              <p>Mom</p>
              <p>+3809798782300</p>
            </div>
            <div class="todo-item text-white">
              <div class="actions">
                <button type="button" class="btn-close btn-close-white" aria-label="Close"></button>
              </div>
              <p>Sister Julia</p>
              <p>+3806023460845</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkPage'
}
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');

.todo-card {
  margin-top: 20px;
}

.add-todo-btn {
  margin-top: 10px;
}

.todo-item {
  margin-bottom: 10px;
}
</style>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
