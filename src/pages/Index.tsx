import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  type: string;
  color: string;
  size: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: 'Geometric Gold', type: 'Напольная', color: 'Бежевый', size: '60x60', price: 2500, image: 'https://cdn.poehali.dev/projects/b0b915b3-384a-4774-8b88-175b200f4808/files/d62bcc74-be9a-4def-9d8a-2863ac40f368.jpg' },
  { id: 2, name: 'Минимализм', type: 'Настенная', color: 'Белый', size: '30x90', price: 1800, image: 'https://cdn.poehali.dev/projects/b0b915b3-384a-4774-8b88-175b200f4808/files/9432d2be-1fcb-4203-8db0-1bffd15cd2d3.jpg' },
  { id: 3, name: 'Мрамор Люкс', type: 'Напольная', color: 'Серый', size: '60x120', price: 3200, image: 'https://cdn.poehali.dev/projects/b0b915b3-384a-4774-8b88-175b200f4808/files/29bab709-b346-4c33-bbaf-5f473f2ae3af.jpg' },
  { id: 4, name: 'Классик Крем', type: 'Настенная', color: 'Бежевый', size: '30x60', price: 1500, image: 'https://cdn.poehali.dev/projects/b0b915b3-384a-4774-8b88-175b200f4808/files/9432d2be-1fcb-4203-8db0-1bffd15cd2d3.jpg' },
  { id: 5, name: 'Темный Шик', type: 'Напольная', color: 'Черный', size: '60x60', price: 2800, image: 'https://cdn.poehali.dev/projects/b0b915b3-384a-4774-8b88-175b200f4808/files/29bab709-b346-4c33-bbaf-5f473f2ae3af.jpg' },
  { id: 6, name: 'Светлый День', type: 'Настенная', color: 'Белый', size: '20x60', price: 1200, image: 'https://cdn.poehali.dev/projects/b0b915b3-384a-4774-8b88-175b200f4808/files/9432d2be-1fcb-4203-8db0-1bffd15cd2d3.jpg' },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedType, setSelectedType] = useState<string>('Все');
  const [selectedColor, setSelectedColor] = useState<string>('Все');
  const [selectedSize, setSelectedSize] = useState<string>('Все');

  const types = ['Все', 'Напольная', 'Настенная'];
  const colors = ['Все', 'Белый', 'Бежевый', 'Серый', 'Черный'];
  const sizes = ['Все', '20x60', '30x60', '30x90', '60x60', '60x120'];

  const filteredProducts = products.filter(product => {
    return (selectedType === 'Все' || product.type === selectedType) &&
           (selectedColor === 'Все' || product.color === selectedColor) &&
           (selectedSize === 'Все' || product.size === selectedSize);
  });

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-secondary/95 backdrop-blur-sm border-b border-primary/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-serif text-primary">КЕРАМИКА</h1>
            <div className="hidden md:flex items-center gap-8">
              {['home', 'catalog', 'collections', 'about', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`text-sm uppercase tracking-wider transition-colors ${
                    activeSection === section ? 'text-primary' : 'text-primary/60 hover:text-primary'
                  }`}
                >
                  {section === 'home' ? 'Главная' : 
                   section === 'catalog' ? 'Каталог' :
                   section === 'collections' ? 'Коллекции' :
                   section === 'about' ? 'О компании' : 'Контакты'}
                </button>
              ))}
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-secondary">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {activeSection === 'home' && (
        <section className="pt-20 animate-fade-in">
          <div className="relative h-[90vh] bg-gradient-to-br from-secondary via-secondary to-secondary/90 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <img 
                src="https://cdn.poehali.dev/projects/b0b915b3-384a-4774-8b88-175b200f4808/files/d62bcc74-be9a-4def-9d8a-2863ac40f368.jpg" 
                alt="Background" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 text-center px-6">
              <h2 className="text-7xl md:text-8xl font-serif text-primary mb-6 tracking-tight">
                Премиум<br />Керамика
              </h2>
              <p className="text-xl text-primary/80 mb-8 max-w-2xl mx-auto">
                Элитные коллекции керамической плитки для создания неповторимых интерьеров
              </p>
              <Button 
                size="lg" 
                className="bg-primary text-secondary hover:bg-primary/90 text-lg px-8"
                onClick={() => setActiveSection('catalog')}
              >
                Смотреть каталог
              </Button>
            </div>
          </div>

          <div className="container mx-auto px-6 py-20">
            <h3 className="text-5xl font-serif text-center mb-4">Наши преимущества</h3>
            <p className="text-center text-muted-foreground mb-16">Почему выбирают нас</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: 'Award', title: 'Премиум качество', desc: 'Только сертифицированная продукция европейских производителей' },
                { icon: 'Truck', title: 'Доставка по РФ', desc: 'Быстрая и безопасная доставка в любой регион России' },
                { icon: 'Palette', title: 'Дизайн-проект', desc: 'Бесплатная консультация дизайнера при заказе от 100 000₽' }
              ].map((item, idx) => (
                <Card key={idx} className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name={item.icon as any} size={32} className="text-primary" />
                    </div>
                    <h4 className="text-xl font-serif mb-3">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-secondary py-20">
            <div className="container mx-auto px-6">
              <img 
                src="https://cdn.poehali.dev/projects/b0b915b3-384a-4774-8b88-175b200f4808/files/d62bcc74-be9a-4def-9d8a-2863ac40f368.jpg"
                alt="3D планировка"
                className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
              />
              <h3 className="text-4xl font-serif text-center mt-12 text-primary">
                Визуализация вашего проекта
              </h3>
              <p className="text-center text-primary/70 mt-4">
                Увидьте результат до начала работ с нашей 3D-визуализацией
              </p>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'catalog' && (
        <section className="pt-24 pb-16 animate-fade-in">
          <div className="container mx-auto px-6">
            <h2 className="text-6xl font-serif mb-4">Каталог</h2>
            <p className="text-muted-foreground mb-12">Выберите идеальную керамику для вашего проекта</p>

            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="p-6">
                <h4 className="font-serif text-lg mb-4">Тип плитки</h4>
                <div className="space-y-2">
                  {types.map(type => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`w-full text-left px-3 py-2 rounded transition-colors ${
                        selectedType === type ? 'bg-primary text-secondary' : 'hover:bg-muted'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="font-serif text-lg mb-4">Цвет</h4>
                <div className="space-y-2">
                  {colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-full text-left px-3 py-2 rounded transition-colors ${
                        selectedColor === color ? 'bg-primary text-secondary' : 'hover:bg-muted'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="font-serif text-lg mb-4">Размер (см)</h4>
                <div className="space-y-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-full text-left px-3 py-2 rounded transition-colors ${
                        selectedSize === size ? 'bg-primary text-secondary' : 'hover:bg-muted'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-secondary">
                <h4 className="font-serif text-lg mb-2 text-primary">Фильтры</h4>
                <Separator className="my-4 bg-primary/20" />
                <div className="space-y-3 text-sm text-primary/80">
                  <div>
                    <span className="font-medium">Тип:</span> {selectedType}
                  </div>
                  <div>
                    <span className="font-medium">Цвет:</span> {selectedColor}
                  </div>
                  <div>
                    <span className="font-medium">Размер:</span> {selectedSize}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4 border-primary text-primary"
                    onClick={() => {
                      setSelectedType('Все');
                      setSelectedColor('Все');
                      setSelectedSize('Все');
                    }}
                  >
                    Сбросить
                  </Button>
                </div>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all group">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-serif">{product.name}</h3>
                      <Badge className="bg-primary text-secondary">{product.type}</Badge>
                    </div>
                    <div className="flex gap-2 mb-4 text-sm text-muted-foreground">
                      <span>{product.color}</span>
                      <span>•</span>
                      <span>{product.size} см</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-3xl font-serif">{product.price.toLocaleString()}₽</span>
                      <Button className="bg-primary text-secondary hover:bg-primary/90">
                        Заказать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'collections' && (
        <section className="pt-24 pb-16 animate-fade-in">
          <div className="container mx-auto px-6">
            <h2 className="text-6xl font-serif mb-4">Коллекции</h2>
            <p className="text-muted-foreground mb-16">Эксклюзивные коллекции керамики</p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { 
                  name: 'Золотая коллекция', 
                  desc: 'Роскошные орнаменты с золотым декором',
                  items: '12 позиций',
                  image: 'https://cdn.poehali.dev/projects/b0b915b3-384a-4774-8b88-175b200f4808/files/d62bcc74-be9a-4def-9d8a-2863ac40f368.jpg'
                },
                { 
                  name: 'Минимализм', 
                  desc: 'Чистые линии и лаконичные формы',
                  items: '8 позиций',
                  image: 'https://cdn.poehali.dev/projects/b0b915b3-384a-4774-8b88-175b200f4808/files/9432d2be-1fcb-4203-8db0-1bffd15cd2d3.jpg'
                },
                { 
                  name: 'Мраморная серия', 
                  desc: 'Имитация натурального мрамора',
                  items: '15 позиций',
                  image: 'https://cdn.poehali.dev/projects/b0b915b3-384a-4774-8b88-175b200f4808/files/29bab709-b346-4c33-bbaf-5f473f2ae3af.jpg'
                },
                { 
                  name: 'Классика', 
                  desc: 'Вневременные решения для дома',
                  items: '20 позиций',
                  image: 'https://cdn.poehali.dev/projects/b0b915b3-384a-4774-8b88-175b200f4808/files/9432d2be-1fcb-4203-8db0-1bffd15cd2d3.jpg'
                }
              ].map((collection, idx) => (
                <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-all group cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img 
                      src={collection.image} 
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-3xl font-serif mb-3">{collection.name}</h3>
                    <p className="text-muted-foreground mb-4">{collection.desc}</p>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="border-primary text-primary">
                        {collection.items}
                      </Badge>
                      <Button variant="ghost" className="text-primary hover:text-primary/80">
                        Смотреть <Icon name="ArrowRight" size={16} className="ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'about' && (
        <section className="pt-24 pb-16 animate-fade-in">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-6xl font-serif mb-4">О компании</h2>
            <Separator className="my-8" />
            
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                <span className="text-4xl font-serif text-primary float-left mr-4 leading-none">К</span>
                ерамика — это компания с 15-летним опытом работы на российском рынке премиальных отделочных материалов.
              </p>
              <p>
                Мы специализируемся на поставках элитной керамической плитки от ведущих европейских производителей. 
                Наша миссия — делать роскошь доступной, сохраняя высочайшие стандарты качества.
              </p>
              <div className="grid md:grid-cols-3 gap-6 my-12">
                {[
                  { number: '15+', label: 'Лет на рынке' },
                  { number: '500+', label: 'Реализованных проектов' },
                  { number: '50+', label: 'Партнёров' }
                ].map((stat, idx) => (
                  <Card key={idx} className="p-6 text-center bg-secondary border-primary/20">
                    <div className="text-5xl font-serif text-primary mb-2">{stat.number}</div>
                    <div className="text-primary/70">{stat.label}</div>
                  </Card>
                ))}
              </div>
              <p>
                Команда профессиональных дизайнеров поможет вам создать уникальный интерьер, 
                а наши специалисты обеспечат качественную укладку с гарантией результата.
              </p>
            </div>
          </div>
        </section>
      )}

      {activeSection === 'contacts' && (
        <section className="pt-24 pb-16 animate-fade-in">
          <div className="container mx-auto px-6">
            <h2 className="text-6xl font-serif mb-4">Контакты</h2>
            <p className="text-muted-foreground mb-16">Свяжитесь с нами удобным способом</p>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                {[
                  { icon: 'MapPin', title: 'Адрес', text: 'г. Москва, ул. Примерная, д. 123' },
                  { icon: 'Phone', title: 'Телефон', text: '+7 (495) 123-45-67' },
                  { icon: 'Mail', title: 'Email', text: 'info@ceramica.ru' },
                  { icon: 'Clock', title: 'Режим работы', text: 'Пн-Пт: 9:00-20:00, Сб-Вс: 10:00-18:00' }
                ].map((contact, idx) => (
                  <Card key={idx} className="p-6 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name={contact.icon as any} size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-serif text-xl mb-1">{contact.title}</h4>
                        <p className="text-muted-foreground">{contact.text}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-8">
                <h3 className="font-serif text-2xl mb-6">Отправить сообщение</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 rounded border border-input bg-background focus:border-primary outline-none transition-colors"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 rounded border border-input bg-background focus:border-primary outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Сообщение</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-2 rounded border border-input bg-background focus:border-primary outline-none transition-colors resize-none"
                      placeholder="Ваше сообщение..."
                    />
                  </div>
                  <Button className="w-full bg-primary text-secondary hover:bg-primary/90">
                    Отправить
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>
      )}

      <footer className="bg-secondary border-t border-primary/20 py-12 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-2xl text-primary mb-4">КЕРАМИКА</h3>
              <p className="text-primary/70 text-sm">
                Премиальные решения для вашего дома
              </p>
            </div>
            {[
              { title: 'Компания', links: ['О нас', 'Партнёры', 'Вакансии'] },
              { title: 'Помощь', links: ['Доставка', 'Оплата', 'Гарантия'] },
              { title: 'Контакты', links: ['+7 (495) 123-45-67', 'info@ceramica.ru', 'Москва'] }
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="font-serif text-lg text-primary mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-primary/70 hover:text-primary text-sm transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator className="mb-8 bg-primary/20" />
          <div className="text-center text-primary/60 text-sm">
            © 2024 Керамика. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
