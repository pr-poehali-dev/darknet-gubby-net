import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [walletBalance, setWalletBalance] = useState('0.00847532');

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) setSelectedFile(file);
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    setDragOver(false);
    const file = event.dataTransfer.files[0];
    if (file) setSelectedFile(file);
  };

  const mockPosts = [
    {
      id: 1,
      user: 'Anonymous_7x9',
      title: 'Secure File Sharing Protocol',
      content: 'Looking for recommendations on encrypted file transfer methods...',
      time: '23:47',
      replies: 12,
      category: 'crypto'
    },
    {
      id: 2,
      user: 'DarkTrader_88',
      title: 'Trading BTC for XMR',
      content: 'Trusted exchange needed. PM for details.',
      time: '22:15',
      replies: 5,
      category: 'trade'
    },
    {
      id: 3,
      user: 'NetGhost',
      title: 'VPN Service Reviews 2024',
      content: 'Comprehensive analysis of current VPN providers...',
      time: '21:33',
      replies: 28,
      category: 'security'
    }
  ];

  const mockMessages = [
    { id: 1, user: 'CryptoKing', message: 'New batch available. Check channels.', time: '23:52' },
    { id: 2, user: 'ShadowNet', message: 'Server maintenance at 03:00 GMT', time: '23:45' },
    { id: 3, user: 'Anonymous', message: 'Market prices updated', time: '23:30' }
  ];

  const marketplaceItems = [
    {
      id: 1,
      title: 'Premium Database Access',
      vendor: 'DataMiner_Pro',
      price: '2.5 BTC',
      rating: 4.8,
      sales: 47,
      category: 'Data',
      image: '💾'
    },
    {
      id: 2,
      title: 'Encrypted VPN Service',
      vendor: 'SecureNet_Admin',
      price: '0.05 BTC',
      rating: 4.9,
      sales: 234,
      category: 'Services',
      image: '🔒'
    },
    {
      id: 3,
      title: 'Clean Credit Cards',
      vendor: 'CardMaster_88',
      price: '1.2 BTC',
      rating: 4.6,
      sales: 89,
      category: 'Finance',
      image: '💳'
    },
    {
      id: 4,
      title: 'Document Templates',
      vendor: 'FakeID_Guru',
      price: '0.8 BTC',
      rating: 4.7,
      sales: 156,
      category: 'Documents',
      image: '📄'
    }
  ];

  const cryptoRates = [
    { symbol: 'BTC', name: 'Bitcoin', price: '$67,342.50', change: '+2.34%', trend: 'up' },
    { symbol: 'ETH', name: 'Ethereum', price: '$3,456.78', change: '+1.87%', trend: 'up' },
    { symbol: 'XMR', name: 'Monero', price: '$187.93', change: '-0.45%', trend: 'down' },
    { symbol: 'ZEC', name: 'Zcash', price: '$45.67', change: '+3.12%', trend: 'up' }
  ];

  const forumCategories = [
    { name: 'Trading & Marketplace', posts: 12547, latest: '2 мин назад', icon: '💰' },
    { name: 'Hacking & Security', posts: 8932, latest: '5 мин назад', icon: '🔓' },
    { name: 'Cryptocurrency', posts: 15678, latest: '1 мин назад', icon: '₿' },
    { name: 'Drugs & Chemicals', posts: 6743, latest: '12 мин назад', icon: '💊' },
    { name: 'Fraud & Scams', posts: 4521, latest: '8 мин назад', icon: '🎭' },
    { name: 'Digital Goods', posts: 9876, latest: '3 мин назад', icon: '💿' },
    { name: 'Services', posts: 7234, latest: '15 мин назад', icon: '🛠️' },
    { name: 'Counterfeit Items', posts: 3456, latest: '20 мин назад', icon: '👕' }
  ];

  const recentTransactions = [
    { id: 'TX001', type: 'Покупка', item: 'VPN Service', amount: '-0.05 BTC', status: 'Подтверждено' },
    { id: 'TX002', type: 'Продажа', item: 'Database', amount: '+2.1 BTC', status: 'Завершено' },
    { id: 'TX003', type: 'Обмен', item: 'BTC → XMR', amount: '-1.0 BTC', status: 'В процессе' }
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 border-b border-gray-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">G</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-400">Gubby.Net</h1>
              <p className="text-xs text-gray-500">Underground Marketplace</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Alert className="border-yellow-600 bg-yellow-900/20 py-2 px-3">
              <Icon name="AlertTriangle" size={16} className="text-yellow-400" />
              <AlertDescription className="text-yellow-400 text-xs ml-2">
                Всегда используйте Tor Browser
              </AlertDescription>
            </Alert>
            <Badge variant="outline" className="bg-darknet-gray-900 text-green-400 border-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Онлайн
            </Badge>
            <div className="text-right">
              <p className="text-xs text-gray-400">Баланс кошелька:</p>
              <p className="text-green-400 font-bold">{walletBalance} BTC</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7 bg-darknet-gray-900 border-gray-800">
            <TabsTrigger value="home" className="text-gray-400 data-[state=active]:text-green-400">
              <Icon name="Home" size={16} className="mr-2" />
              Главная
            </TabsTrigger>
            <TabsTrigger value="marketplace" className="text-gray-400 data-[state=active]:text-green-400">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Маркет
            </TabsTrigger>
            <TabsTrigger value="crypto" className="text-gray-400 data-[state=active]:text-green-400">
              <Icon name="DollarSign" size={16} className="mr-2" />
              Криpto
            </TabsTrigger>
            <TabsTrigger value="forums" className="text-gray-400 data-[state=active]:text-green-400">
              <Icon name="MessageSquare" size={16} className="mr-2" />
              Форумы
            </TabsTrigger>
            <TabsTrigger value="upload" className="text-gray-400 data-[state=active]:text-green-400">
              <Icon name="Upload" size={16} className="mr-2" />
              Загрузка
            </TabsTrigger>
            <TabsTrigger value="search" className="text-gray-400 data-[state=active]:text-green-400">
              <Icon name="Search" size={16} className="mr-2" />
              Поиск
            </TabsTrigger>
            <TabsTrigger value="messages" className="text-gray-400 data-[state=active]:text-green-400">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Чат
            </TabsTrigger>
          </TabsList>

          {/* Home Tab */}
          <TabsContent value="home" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-darknet-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center">
                    <Icon name="TrendingUp" size={20} className="mr-2" />
                    Статистика сети
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Активных продавцов:</span>
                      <span className="text-green-400">2,847</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Сделок сегодня:</span>
                      <span className="text-green-400">15,932</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Объем торгов:</span>
                      <span className="text-green-400">847.2 BTC</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Онлайн сейчас:</span>
                      <span className="text-green-400">12,456</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-darknet-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center">
                    <Icon name="Shield" size={20} className="mr-2" />
                    Безопасность
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Tor статус:</span>
                      <Badge variant="outline" className="bg-green-900/20 text-green-400 border-green-400 text-xs">
                        Активен
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">VPN:</span>
                      <Badge variant="outline" className="bg-green-900/20 text-green-400 border-green-400 text-xs">
                        Подключен
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Шифрование:</span>
                      <Badge variant="outline" className="bg-green-900/20 text-green-400 border-green-400 text-xs">
                        AES-256
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">2FA:</span>
                      <Badge variant="outline" className="bg-yellow-900/20 text-yellow-400 border-yellow-400 text-xs">
                        Настроить
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-darknet-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center">
                    <Icon name="Clock" size={20} className="mr-2" />
                    Последние сделки
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {recentTransactions.map((tx) => (
                      <div key={tx.id} className="text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-400">{tx.type}</span>
                          <span className="text-green-400">{tx.amount}</span>
                        </div>
                        <div className="text-gray-500">{tx.item}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Categories */}
            <Card className="bg-darknet-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Icon name="Star" size={20} className="mr-2" />
                  Популярные категории
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-darknet-gray-800 rounded-lg text-center hover:bg-darknet-gray-700 cursor-pointer transition-colors">
                    <div className="text-3xl mb-2">💰</div>
                    <h3 className="text-green-400 font-medium">Финансы</h3>
                    <p className="text-xs text-gray-500">847 товаров</p>
                  </div>
                  <div className="p-4 bg-darknet-gray-800 rounded-lg text-center hover:bg-darknet-gray-700 cursor-pointer transition-colors">
                    <div className="text-3xl mb-2">🔒</div>
                    <h3 className="text-green-400 font-medium">Безопасность</h3>
                    <p className="text-xs text-gray-500">423 товаров</p>
                  </div>
                  <div className="p-4 bg-darknet-gray-800 rounded-lg text-center hover:bg-darknet-gray-700 cursor-pointer transition-colors">
                    <div className="text-3xl mb-2">💿</div>
                    <h3 className="text-green-400 font-medium">Цифровые товары</h3>
                    <p className="text-xs text-gray-500">1,234 товаров</p>
                  </div>
                  <div className="p-4 bg-darknet-gray-800 rounded-lg text-center hover:bg-darknet-gray-700 cursor-pointer transition-colors">
                    <div className="text-3xl mb-2">🛠️</div>
                    <h3 className="text-green-400 font-medium">Услуги</h3>
                    <p className="text-xs text-gray-500">567 товаров</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Marketplace Tab */}
          <TabsContent value="marketplace" className="space-y-6 mt-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-green-400 font-bold">Торговая площадка</h2>
              <div className="flex space-x-2">
                <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-900/20 text-sm">
                  <Icon name="Filter" size={16} className="mr-2" />
                  Фильтры
                </Button>
                <Button className="bg-green-600 hover:bg-green-700 text-black text-sm">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить товар
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {marketplaceItems.map((item) => (
                <Card key={item.id} className="bg-darknet-gray-900 border-gray-800 hover:border-green-400 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="text-3xl">{item.image}</div>
                      <Badge variant="secondary" className="bg-darknet-gray-800 text-gray-400 text-xs">
                        {item.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-green-400 text-sm">{item.title}</CardTitle>
                    <CardDescription className="text-gray-400 text-xs">by {item.vendor}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-green-400 font-bold text-lg">{item.price}</span>
                      <div className="flex items-center space-x-1">
                        <Icon name="Star" size={12} className="text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-400">{item.rating}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
                      <span>{item.sales} продаж</span>
                      <span className="text-green-400">В наличии</span>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-black text-sm">
                      <Icon name="ShoppingCart" size={14} className="mr-2" />
                      Купить
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Crypto Tab */}
          <TabsContent value="crypto" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-darknet-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center">
                    <Icon name="TrendingUp" size={20} className="mr-2" />
                    Курсы криптовалют
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {cryptoRates.map((crypto) => (
                      <div key={crypto.symbol} className="flex items-center justify-between p-2 bg-darknet-gray-800 rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                            <span className="text-black font-bold text-xs">{crypto.symbol}</span>
                          </div>
                          <div>
                            <p className="text-green-400 font-medium text-sm">{crypto.name}</p>
                            <p className="text-xs text-gray-500">{crypto.symbol}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-green-400 font-bold text-sm">{crypto.price}</p>
                          <p className={`text-xs ${crypto.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                            {crypto.change}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-darknet-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center">
                    <Icon name="Wallet" size={20} className="mr-2" />
                    Мой кошелек
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-darknet-gray-800 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400 text-sm">BTC Баланс</span>
                        <Button variant="ghost" size="sm">
                          <Icon name="Eye" size={14} />
                        </Button>
                      </div>
                      <p className="text-2xl font-bold text-green-400">{walletBalance}</p>
                      <p className="text-xs text-gray-500">≈ $4,567.89 USD</p>
                    </div>
                    
                    <div className="space-y-2">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-black">
                        <Icon name="ArrowDown" size={16} className="mr-2" />
                        Пополнить
                      </Button>
                      <Button variant="outline" className="w-full border-green-400 text-green-400 hover:bg-green-900/20">
                        <Icon name="ArrowUp" size={16} className="mr-2" />
                        Вывести
                      </Button>
                    </div>
                    
                    <div className="p-3 bg-darknet-gray-800 rounded-lg">
                      <p className="text-xs text-gray-400 mb-1">Адрес кошелька:</p>
                      <p className="text-xs text-green-400 font-mono break-all">
                        bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Exchange Section */}
            <Card className="bg-darknet-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Icon name="RefreshCw" size={20} className="mr-2" />
                  Обмен криптовалют
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-green-400 mb-2">Отдаю</label>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="0.00"
                        className="bg-darknet-gray-800 border-gray-600 text-green-400"
                      />
                      <Button variant="outline" className="border-gray-600 text-gray-400 min-w-[80px]">
                        BTC
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-green-400 mb-2">Получаю</label>
                    <div className="flex space-x-2">
                      <Input
                        placeholder="0.00"
                        className="bg-darknet-gray-800 border-gray-600 text-green-400"
                        readOnly
                      />
                      <Button variant="outline" className="border-gray-600 text-gray-400 min-w-[80px]">
                        XMR
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-darknet-gray-800 rounded-lg">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Курс обмена:</span>
                    <span>1 BTC = 358.7 XMR</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Комиссия:</span>
                    <span>0.1%</span>
                  </div>
                </div>
                
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-black">
                  <Icon name="RefreshCw" size={16} className="mr-2" />
                  Обменять
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Forums Tab */}
          <TabsContent value="forums" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {forumCategories.map((category, index) => (
                <Card key={index} className="bg-darknet-gray-900 border-gray-800 hover:border-green-400 transition-colors cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{category.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-green-400 font-medium">{category.name}</h3>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>{category.posts} сообщений</span>
                          <span>Последнее: {category.latest}</span>
                        </div>
                      </div>
                      <Icon name="ChevronRight" size={16} className="text-gray-600" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Upload Tab */}
          <TabsContent value="upload" className="space-y-6 mt-6">
            <Card className="bg-darknet-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Icon name="Upload" size={20} className="mr-2" />
                  Анонимная загрузка файлов
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Безопасная загрузка с автоматическим шифрованием
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div
                  className={`border-2 border-dashed ${
                    dragOver ? 'border-green-400 bg-green-900/10' : 'border-gray-600'
                  } rounded-lg p-8 text-center transition-colors`}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                >
                  <Icon name="Upload" size={48} className="mx-auto text-gray-500 mb-4" />
                  <p className="text-gray-400 mb-4">
                    Перетащите файлы сюда для анонимной загрузки
                  </p>
                  <input
                    type="file"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-input"
                    multiple
                  />
                  <label htmlFor="file-input">
                    <Button variant="outline" className="cursor-pointer border-green-400 text-green-400 hover:bg-green-900/20">
                      Выбрать файлы
                    </Button>
                  </label>
                  {selectedFile && (
                    <div className="mt-4 p-4 bg-darknet-gray-800 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Icon name="File" size={16} className="text-green-400" />
                          <span className="text-green-400">{selectedFile.name}</span>
                        </div>
                        <Badge variant="outline" className="bg-green-900/20 text-green-400 border-green-400">
                          Зашифрован
                        </Badge>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mt-6">
                  <label className="block text-sm font-medium text-green-400 mb-2">
                    Описание (необязательно)
                  </label>
                  <Textarea
                    placeholder="Описание файла..."
                    className="bg-darknet-gray-800 border-gray-600 text-green-400"
                  />
                </div>

                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-black">
                  <Icon name="Shield" size={16} className="mr-2" />
                  Загрузить с шифрованием
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Network Tab */}
          <TabsContent value="network" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-darknet-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center">
                    <Icon name="Globe" size={20} className="mr-2" />
                    Объявления сети
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockPosts.map((post) => (
                      <div key={post.id} className="p-3 bg-darknet-gray-800 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <span className="text-green-400 font-medium text-sm">{post.user}</span>
                          <span className="text-xs text-gray-500">{post.time}</span>
                        </div>
                        <h3 className="text-green-400 font-medium mb-1">{post.title}</h3>
                        <p className="text-gray-400 text-sm">{post.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-darknet-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center">
                    <Icon name="Plus" size={20} className="mr-2" />
                    Новое объявление
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-green-400 mb-2">
                        Заголовок
                      </label>
                      <Input
                        placeholder="Заголовок объявления"
                        className="bg-darknet-gray-800 border-gray-600 text-green-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-green-400 mb-2">
                        Категория
                      </label>
                      <Input
                        placeholder="crypto, trade, security..."
                        className="bg-darknet-gray-800 border-gray-600 text-green-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-green-400 mb-2">
                        Содержание
                      </label>
                      <Textarea
                        placeholder="Текст объявления..."
                        className="bg-darknet-gray-800 border-gray-600 text-green-400"
                        rows={4}
                      />
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-black">
                      <Icon name="Send" size={16} className="mr-2" />
                      Опубликовать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Search Tab */}
          <TabsContent value="search" className="space-y-6 mt-6">
            <Card className="bg-darknet-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Icon name="Search" size={20} className="mr-2" />
                  Поиск по Gubby.Net
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 mb-6">
                  <Input
                    placeholder="Товары, продавцы, форумы..."
                    className="bg-darknet-gray-800 border-gray-600 text-green-400"
                  />
                  <Button className="bg-green-600 hover:bg-green-700 text-black">
                    <Icon name="Search" size={16} />
                  </Button>
                </div>
                
                <Alert className="border-red-600 bg-red-900/20 mb-4">
                  <Icon name="AlertTriangle" size={16} className="text-red-400" />
                  <AlertDescription className="text-red-400 ml-2">
                    Будьте осторожны при поиске незаконного контента
                  </AlertDescription>
                </Alert>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-darknet-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-green-400 text-sm flex items-center">
                        <Icon name="ShoppingCart" size={16} className="mr-2" />
                        Товары
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 text-sm">12,847 активных товаров</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-darknet-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-green-400 text-sm flex items-center">
                        <Icon name="Users" size={16} className="mr-2" />
                        Продавцы
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 text-sm">2,847 проверенных</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-darknet-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-green-400 text-sm flex items-center">
                        <Icon name="MessageSquare" size={16} className="mr-2" />
                        Форумы
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 text-sm">57,634 сообщений</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Messages Tab */}
          <TabsContent value="messages" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-darknet-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center">
                    <Icon name="Users" size={20} className="mr-2" />
                    Контакты
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {['CryptoKing', 'ShadowTrader', 'Anonymous_777', 'DarkMaster'].map((user) => (
                      <div key={user} className="flex items-center space-x-3 p-2 hover:bg-darknet-gray-800 rounded cursor-pointer">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                          <Icon name="User" size={16} className="text-black" />
                        </div>
                        <div className="flex-1">
                          <p className="text-green-400 font-medium text-sm">{user}</p>
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <p className="text-xs text-gray-500">Онлайн</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 bg-darknet-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center justify-between">
                    <div className="flex items-center">
                      <Icon name="MessageCircle" size={20} className="mr-2" />
                      Зашифрованный чат
                    </div>
                    <Badge variant="outline" className="bg-green-900/20 text-green-400 border-green-400 text-xs">
                      E2E Encrypted
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <Icon name="User" size={16} className="text-black" />
                      </div>
                      <div className="bg-darknet-gray-800 p-3 rounded-lg">
                        <p className="text-green-400 font-medium text-sm">CryptoKing</p>
                        <p className="text-gray-400 text-sm">Есть новая партия, проверь личку</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <div className="bg-green-600 p-3 rounded-lg max-w-xs">
                        <p className="text-black text-sm">Понял, сейчас посмотрю</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Зашифрованное сообщение..."
                      className="bg-darknet-gray-800 border-gray-600 text-green-400"
                    />
                    <Button className="bg-green-600 hover:bg-green-700 text-black">
                      <Icon name="Send" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm mb-2">
            Gubby.Net - Подпольная сеть | Всегда используйте Tor | v3.7.2
          </p>
          <div className="flex justify-center space-x-4">
            <Badge variant="outline" className="bg-darknet-gray-900 text-gray-400 border-gray-600 text-xs">
              <Icon name="Shield" size={12} className="mr-1" />
              Максимальная анонимность
            </Badge>
            <Badge variant="outline" className="bg-darknet-gray-900 text-gray-400 border-gray-600 text-xs">
              <Icon name="Lock" size={12} className="mr-1" />
              Escrow защита
            </Badge>
            <Badge variant="outline" className="bg-darknet-gray-900 text-gray-400 border-gray-600 text-xs">
              <Icon name="Zap" size={12} className="mr-1" />
              Мгновенные сделки
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;