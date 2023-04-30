const TEMPLATE_PATH = `${process.cwd()}/views/borderaux.ejs`

// data for testing
const fakeData = {
  number: '305',
  date: '2023-04-28',
  sender: 'LE SERVICE DE MISE EN ŒUVRE DES PROJETS',
  receiver: 'LE SERVICE DES AIDES ET INCITATIONS',
  content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin',
  quantite: '01'
}
const PORT = 5555

export { TEMPLATE_PATH, fakeData, PORT }