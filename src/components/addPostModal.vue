<template>
  <div class="modal" id="add_post_modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="add_post_item_modal_label">{{ isEditMode ? 'Edit post' : 'Add post' }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="hide"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="isEditMode ? onEdit() : onAdd()">
            <div class="mb-3">
              <label for="add_title_post" class="form_label">Title</label>
              <textarea class="form-control" required id="add_title_post" v-model="currentPost.title" rows="1" placeholder="Enter title..."></textarea>
            </div>
            <div class="mb-3">
              <label for="post-text-input" class="form-label">Text</label>
              <textarea class="form-control" required id="post-text-input" v-model="currentPost.description" rows="3" placeholder="Start typing..."></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-success btn-dark" xd="!currentPost.title || !currentPost.description" @click="isEditMode ? onEdit() : onAdd()">{{ isEditMode ? 'Save changes' : 'Save' }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Modal } from "bootstrap";
import type { IPost } from "@/interfaces/post.interface";
import { h } from "vue";

export default {
  name: "AddPostModal",
  props: ['mode', 'posts', 'postId'],
  data() {
    return {
      currentPost: {
        title: '',
        description: '',
        id: null,
        comments: null,
      },
      isEditMode: false,
      modal: null,
    };
  },
  mounted() {
    this.modal = new Modal(this.$el);
  },
  methods: {
    h,
    show() {
      this.modal?.show();
    },
    hide() {
      this.modal?.hide();
    },

    onAdd() {
      if (this.currentPost.title && this.currentPost.description) {
        const post = {
          title: this.currentPost.title,
          description: this.currentPost.description,
          id: Math.floor(Math.random() * 1000),
          comments: [],
        };
        this.$emit('add', post);
        this.hide();
      }
    },
    onEdit() {
      if (this.currentPost.title && this.currentPost.description) {
        const post = {
          title: this.currentPost.title,
          description: this.currentPost.description,
          id: this.currentPost.id,
        };
        this.$emit('edit', post);
        this.hide();
      }
    },
    showEditMode(postId: number) {
      this.isEditMode = true;
      const post = this.posts.find((post: IPost) => post.id === postId);

      if (post) {
        this.currentPost = { ...post };
        const modalElement = this.$el;
        const modal = new Modal(modalElement);
        modal.show();
      }
    },
    clearData() {
      this.currentPost = {
        title: '',
        description: '',
        id: null,
        comments: null,
      };
      return null;
    }
  }
};
</script>

<style scoped>

</style>