import { supabase } from './supabaseClient'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    priority: 'medium'
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          first_name: formData.firstName,
          phone: formData.phone,
          email: formData.email,
          priority: formData.priority
        }
      ])
    
    if (error) {
      console.error('Erreur:', error)
      alert("Erreur lors de l'envoi")
    } else {
      alert("Message envoyé avec succès!")
      // Réinitialiser le formulaire
      setFormData({
        firstName: '',
        phone: '',
        email: '',
        priority: 'medium'
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Vos champs de formulaire ici */}
      <button type="submit">Envoyer</button>
    </form>
  )
}