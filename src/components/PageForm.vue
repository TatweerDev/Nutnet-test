<template>
  <form class="container form" @submit.prevent="submitForm">
    <h3 class="text-playfair">GIVE US A GOOD NEWS</h3>
    <input type="text" placeholder="Name"  v-model.trim="name">
    <input type="email" placeholder="Email"  v-model.trim="email">
    <input type="text" placeholder="Subject"  v-model.trim="subject">
    <textarea  name="message" placeholder="Your Message" id="" cols="30" rows="10" v-model.trim="message"></textarea>
    <p v-if="!formIsValid">Please fill all fields and try again</p>
    <span v-if="isSuccess">You form data was successfully sent!</span>
    <button class="submit-button">SUBMIT</button>
  </form>
  
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
      formIsValid: true,
      isSuccess: false
      
    }
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (this.email === '' ||
          this.name === '' ||
          this.message.length === '' ||
          !this.email.includes('@')
          ) {
          this.formIsValid = false;
          console.log('Form filter works!')
          return;
        }
      this.isSuccess = true
      console.log(' Form is works')
    }
  }
}
</script>

<style lang="sass" scoped>
.form
  display: flex
  flex-direction: column
  align-items: center
  width: 460px
  margin: 70px auto

.form h3
  font-size: 16px
  font-weight: bold
  @media (min-width: $tablet-width) and (max-width: $desktop-width)
    margin-bottom: 30px

.form input
  width: 100%
  height: 45px
  box-sizing: border-box
  opacity: 0.8
  padding: 0 20px
  margin-bottom: 24px

.form textarea
  width: 100%
  margin-bottom: 24px
  opacity: 0.8
  padding: 20px

.form button 
  color: #00e0d0
  font-weight: bold
  border: 1.5px solid #00e0d0
  background: transparent
  padding: 10px 33px
  border-radius: 2px
  cursor: pointer
  transition: all 0.4s
  &:hover
    background: rgba(0, 224, 208, 0.2)

.form p
  color: red
.form span
  display: block
  font-weight: bold
  margin: 30px auto


</style>