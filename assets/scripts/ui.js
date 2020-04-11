'use strict'

const store = require('./store')
const showDestinationTemplate = require('./templates/destination-listing.handlebars')
const showEditformTemplate = require('./templates/edit-form.handlebars')

// first loaded
const forFirstView = function () {
  $('.firstView2').hide()
  // $('.secondView').hide()
  $('.firstView1').show()
}
// for sign-up form
const forFirstView1 = function () {
  // $('.secondView').show()
  // $('.secondView').hide()
  $('#sign-in').hide()
  $('#sign-up').show()
}
// for sign-in form
const forFirstView2 = function () {
  // $('.secondView').hide()
  $('#sign-up').hide()
  $('#sign-in').show()
}
// show PW change form
const forChangePW = function () {
  $('.firstView1').hide()

  $('#change-password').show()
}
const showCreateForm = function () {
  $('.create').show()
  $('#list').hide()
}
const signUpSuccess = function (data) {
  $('#signUpInOut').text('Signed up successfully')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('success')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('signUpSuccess data is: ', data)
  $('#sign-up').hide()
  $('#sign-in').show()
}
const signUpFailure = function (data) {
  $('#signUpInOut').text('Signed up failed')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('failure')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
}

const signInSuccess = function (data) {
  $('#signUpInOut').text('Signed in successfully!')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('success')
  $('.firstView1').hide()
  $('#sign-in').hide()

  $('.firstView2').show()
  $('.signedIn').show()
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // $('.edit-clicked').hide()
  store.user = data.user
}
const signInFailure = function (data) {
  $('#signUpInOut').text('Signed in failed')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('failure')
  $('.firstView2').hide()
  forFirstView2()
  $('.firstView1').show()
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // $('.edit-clicked').hide()
}

const pwChangeSuccess = function (data) {
  $('#sign-in').hide()
  $('.firstView1').hide()
  $('#change-password').hide()
  $('#signUpInOut').show()
  $('#signUpInOut').text('Password change successfully!')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('success')
  $('.firstView2').show()
  $('#message').show()
  $('#showCreate').show()
  $('.edit').show()
  $('#listing-button').show()
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('PasswordChangeSuccess data is: ', data)
}
const pwChangeFailure = function (data) {
  $('#signUpInOut').show()
  $('#signUpInOut').text('Password change failed')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('failure')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('PasswordChangeFailure error is: ', error)
}

const logOutSuccess = function (data) {
  $('#signUpInOut').text('Logout successfully!')
  $('#signUpInOut').removeClass()
  // viewStart()
  $('#signUpInOut').addClass('success')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('logOutSuccess: ', data)
  $('.edit-clicked').hide()
  $('#list').hide()
}

const logOutFailure = function (data) {
  $('#signUpInOut').text('How did you even fail logging out????')
  $('#signUpInOut').removeClass()
  $('#signUpInOut').addClass('failure')
  $('form input[type="text"]').val('')
  $('form input[type="password"]').val('')
  // console.log('logOutFailure error is: ', error)
}

// const showListSuccess = function (data) {
//   // console.log('SEEEEE This: ', data.destinations)
//   const createEditButton = (text = 'No text') => {
//     const button = document.createElement('button')
//     button.className = 'edit-button'
//     button.innerText = text
//     $('#list').append(button)
//     return button
//   }
//   const createDeleteButton = (text = 'No text') => {
//     const button = document.createElement('button')
//     button.className = 'delete-button'
//     button.innerText = text
//     $('#list').append(button, `<br> <br> <br>`)
//     return button
//   }
//   function emptyList () {
//     $('#list').html('')
//   }
//   emptyList()
//
//   data.destinations.forEach(destination => {
//     const destinationHTML = (`
//       <h4>name: ${destination.name}</h4>
//       <p>city: ${destination.city}</p>
//       <p>state: ${destination.state}</p>
//     `)
//     $('#list').append(destinationHTML)
//     createEditButton('Edit')
//     createDeleteButton('Delete')
//   })
//   // $('#signUpInOut').removeClass()
//   // $('form input[type="text"]').val('')
//   // $('form input[type="password"]').val('')
// }
//
// const toShowEditForm = function (data) {
//   $('*').hide()
//   $('.edit-clicked').show()
// }
const createDestinationSuccess = function (data) {
  $('#signUpInOut').hide()
  $('#message').text(`New destination successfully created, click "List" button again to see your updated list`)
  $('form input[type="text"]').val('')
  $('form input[type="text"]').val('')
  // console.log('logOutSuccess: ', data)
  $('#list').show()
  $('.edit-clicked').hide()
}
const showDestinationSuccess = (data) => {
  $('#signUpInOut').hide()
  $('#message').text(`Your most updated list!`)
  $('.edit-clicked').hide()

  // console.log('is this JSON: ', data.destinations)
  const showDestinationHTML = showDestinationTemplate({ destinations: data.destinations })
  $('#list').html(showDestinationHTML)
  $('#list').show()
}
const showSaveSuccess = data => {
  console.log('save successful, data!!! ', data)
  $('form input[type="text"]').val('')
  $('form input[type="text"]').val('')
}
const showEditSuccess = (data) => {
  console.log('DATA DEFINE?????: ', data)

  const showEditFormHTML = showEditformTemplate({forms: data})
  $('#edit-form').html(showEditFormHTML)
}

const success = function (data) {
  console.log('It works, here is the data: ', data)
}
const failure = function (data) {
  console.log('the error is: ', data)
}
module.exports = {
  forFirstView,
  forFirstView1,
  forFirstView2,
  forChangePW,
  showCreateForm,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  pwChangeSuccess,
  pwChangeFailure,
  logOutSuccess,
  logOutFailure,
  // showListSuccess,
  // toShowEditForm,
  createDestinationSuccess,
  showDestinationSuccess,
  showSaveSuccess,
  showEditSuccess,
  success,
  failure
}
