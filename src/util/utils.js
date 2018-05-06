export const onKeyPressOnlyNumbers = event => {
  const keyCode = event.keyCode || event.which
  keyCode === 69 && event.preventDefault()
  keyCode === 101 && event.preventDefault()
}
