import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Star, Users, Shield, Phone, Clock, TrendingUp, Wrench, Zap, Hammer } from 'lucide-react'
import guideCover from './assets/guide_cover.png'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    priority: ''
  })

  const [currentStep, setCurrentStep] = useState(1)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Ici vous pourrez connecter à votre backend (Supabase, etc.)
    alert('Merci ! Votre guide sera envoyé par email dans quelques minutes.')
  }

  const nextStep = () => {
    if (currentStep === 1 && formData.firstName && formData.phone && formData.email) {
      setCurrentStep(2)
    }
  }

  const prevStep = () => {
    setCurrentStep(1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MS</span>
              </div>
              <span className="text-xl font-bold text-gray-900">MS360</span>
            </div>
            <a href="https://ms360.fr" className="text-blue-600 hover:text-blue-800 font-medium">
              ms360.fr
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm font-medium">
                ✨ Guide Gratuit - Téléchargement Immédiat
              </Badge>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  <span className="text-orange-600">+40% de devis signés</span><br />
                  grâce à ce guide gratuit
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  Marre de rater des clients pendant vos chantiers ? Ce guide va vous simplifier la vie.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Clock, text: "Gagner du temps sur les chantiers" },
                  { icon: Phone, text: "Réduire les appels manqués" },
                  { icon: TrendingUp, text: "Générer plus de devis automatiquement" },
                  { icon: Star, text: "Avoir une présence professionnelle en ligne" }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <benefit.icon className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">Déjà téléchargé par <strong>2,847 artisans</strong></span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-gray-600 ml-1">4.9/5</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:pl-8">
              <Card className="shadow-2xl border-0 bg-white">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-4">
                    <img 
                      src={guideCover} 
                      alt="Couverture du guide" 
                      className="w-48 h-auto mx-auto rounded-lg shadow-lg"
                    />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    Téléchargez votre guide gratuit
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Remplissez le formulaire ci-dessous pour recevoir votre guide par email
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {currentStep === 1 && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                            Prénom *
                          </Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="mt-1"
                            placeholder="Votre prénom"
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                            Téléphone *
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1"
                            placeholder="06 12 34 56 78"
                          />
                        </div>

                        <div>
                          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1"
                            placeholder="votre@email.fr"
                          />
                        </div>

                        <Button 
                          type="button" 
                          onClick={nextStep}
                          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold"
                          disabled={!formData.firstName || !formData.phone || !formData.email}
                        >
                          Continuer →
                        </Button>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-6">
                        <div>
                          <Label className="text-sm font-medium text-gray-700 mb-4 block">
                            Si tu avais une baguette magique, tu changerais quoi dans ton business ? *
                          </Label>
                          <div className="space-y-3">
                            {[
                              { value: 'plus_clients', label: '+ de clients', icon: TrendingUp },
                              { value: 'moins_paperasse', label: '- de paperasse', icon: CheckCircle },
                              { value: 'equipe_fiable', label: 'Une équipe fiable', icon: Users },
                              { value: 'autre', label: 'Autre', icon: Wrench }
                            ].map((option) => (
                              <label key={option.value} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                                <input
                                  type="radio"
                                  name="priority"
                                  value={option.value}
                                  checked={formData.priority === option.value}
                                  onChange={handleInputChange}
                                  className="text-orange-600"
                                />
                                <option.icon className="w-5 h-5 text-gray-600" />
                                <span className="text-gray-700 font-medium">{option.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <Button 
                            type="button" 
                            onClick={prevStep}
                            variant="outline"
                            className="flex-1"
                          >
                            ← Retour
                          </Button>
                          <Button 
                            type="submit"
                            className="flex-2 bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold"
                            disabled={!formData.priority}
                          >
                            Recevoir mon guide gratuitement
                          </Button>
                        </div>
                      </div>
                    )}
                  </form>

                  {/* Security Notice */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                      <Shield className="w-4 h-4" />
                      <span>Vos données sont confidentielles – jamais partagées</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ce que disent les artisans
            </h2>
            <p className="text-gray-600 text-lg">
              Découvrez comment ce guide a transformé leur business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Pierre M.",
                job: "Plombier",
                company: "Plomberie Pierre",
                text: "Grâce à ce guide, j'ai 2 chantiers de plus par mois. Fini les appels ratés !",
                rating: 5
              },
              {
                name: "Sophie L.",
                job: "Électricienne",
                company: "Élec Pro",
                text: "Mes devis sont maintenant automatisés. Je gagne 5h par semaine minimum.",
                rating: 5
              },
              {
                name: "Marc D.",
                job: "Maçon",
                company: "Maçonnerie Dufour",
                text: "Ma présence en ligne m'a permis de doubler mon chiffre d'affaires en 6 mois.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.job} - {testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-gray-600 font-medium">
              Ils nous font confiance
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {[
              { name: "BTP Solutions", icon: Hammer },
              { name: "Artisan Pro", icon: Wrench },
              { name: "Élec Expert", icon: Zap },
              { name: "Bâti France", icon: Users }
            ].map((company, index) => (
              <div key={index} className="flex items-center justify-center space-x-2">
                <company.icon className="w-6 h-6 text-gray-400" />
                <span className="text-gray-500 font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MS</span>
              </div>
              <span className="text-xl font-bold">MS360</span>
            </div>
            <p className="text-gray-400">
              Une solution digitale sur-mesure, by MS360
            </p>
            <div className="mt-4">
              <a href="https://ms360.fr" className="text-blue-400 hover:text-blue-300">
                ms360.fr
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

