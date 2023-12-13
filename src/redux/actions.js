
export const removeRow = (index) => {
  console.log('is it in actions', index)
  return {
    type: 'REMOVE_ROW',
    value: index
  }
}
