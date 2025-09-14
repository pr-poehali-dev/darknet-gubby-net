import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);

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

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <div className="container mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-4">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={32} className="text-primary" />
            <h1 className="text-3xl font-bold text-primary">Gubby.Net</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="outline" className="bg-darknet-gray-900 text-green-400 border-green-400">
              <Icon name="Wifi" size={16} className="mr-1" />
              Online
            </Badge>
            <Badge variant="outline" className="bg-darknet-gray-900 text-green-400 border-green-400">
              <Icon name="Users" size={16} className="mr-1" />
              1,337 users
            </Badge>
          </div>
        </div>

        {/* Navigation */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-darknet-gray-900 border-gray-800">
            <TabsTrigger value="home" className="text-gray-400 data-[state=active]:text-green-400">
              <Icon name="Home" size={16} className="mr-2" />
              Главная
            </TabsTrigger>
            <TabsTrigger value="upload" className="text-gray-400 data-[state=active]:text-green-400">
              <Icon name="Upload" size={16} className="mr-2" />
              Загрузка
            </TabsTrigger>
            <TabsTrigger value="network" className="text-gray-400 data-[state=active]:text-green-400">
              <Icon name="Globe" size={16} className="mr-2" />
              Gubby.Net
            </TabsTrigger>
            <TabsTrigger value="search" className="text-gray-400 data-[state=active]:text-green-400">
              <Icon name="Search" size={16} className="mr-2" />
              Поиск
            </TabsTrigger>
            <TabsTrigger value="messages" className="text-gray-400 data-[state=active]:text-green-400">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Сообщения
            </TabsTrigger>
          </TabsList>

          {/* Home Tab */}
          <TabsContent value="home" className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-darknet-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center">
                    <Icon name="Activity" size={20} className="mr-2" />
                    Активность сети
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Файлов загружено:</span>
                      <span className="text-green-400">47,832</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Активных пользователей:</span>
                      <span className="text-green-400">1,337</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Новых объявлений:</span>
                      <span className="text-green-400">23</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-darknet-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center">
                    <Icon name="TrendingUp" size={20} className="mr-2" />
                    Статистика
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Общий трафик:</span>
                      <span className="text-green-400">2.4 TB</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Соединений:</span>
                      <span className="text-green-400">8,921</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Безопасность:</span>
                      <span className="text-green-400">100%</span>
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
                      <span className="text-gray-400">Tor подключение:</span>
                      <Badge variant="outline" className="bg-green-900/20 text-green-400 border-green-400">
                        Активно
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Шифрование:</span>
                      <Badge variant="outline" className="bg-green-900/20 text-green-400 border-green-400">
                        AES-256
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Анонимность:</span>
                      <Badge variant="outline" className="bg-green-900/20 text-green-400 border-green-400">
                        Максимум
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Posts */}
            <Card className="bg-darknet-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Icon name="MessageSquare" size={20} className="mr-2" />
                  Последние объявления
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockPosts.map((post) => (
                    <div key={post.id} className="border-b border-gray-800 pb-4 last:border-b-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-green-400 font-medium">{post.user}</span>
                          <Badge variant="secondary" className="bg-darknet-gray-800 text-gray-400">
                            {post.category}
                          </Badge>
                        </div>
                        <span className="text-xs text-gray-500">{post.time}</span>
                      </div>
                      <h3 className="text-green-400 font-medium mb-1">{post.title}</h3>
                      <p className="text-gray-400 text-sm mb-2">{post.content}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <Icon name="MessageCircle" size={12} className="mr-1" />
                        {post.replies} ответов
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Upload Tab */}
          <TabsContent value="upload" className="space-y-6 mt-6">
            <Card className="bg-darknet-gray-900 border-gray-800">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Icon name="Upload" size={20} className="mr-2" />
                  Загрузка файлов
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Безопасная анонимная загрузка файлов любого типа
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
                    Перетащите файлы сюда или нажмите для выбора
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
                      <div className="flex items-center space-x-2">
                        <Icon name="File" size={16} className="text-green-400" />
                        <span className="text-green-400">{selectedFile.name}</span>
                        <span className="text-gray-500">({(selectedFile.size / 1024).toFixed(2)} KB)</span>
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

                <div className="mt-6 flex space-x-4">
                  <Button className="bg-green-600 hover:bg-green-700 text-black">
                    <Icon name="Upload" size={16} className="mr-2" />
                    Загрузить
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-gray-400 hover:bg-gray-800">
                    Очистить
                  </Button>
                </div>
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
                  Поиск по сети
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 mb-6">
                  <Input
                    placeholder="Поиск файлов, объявлений, пользователей..."
                    className="bg-darknet-gray-800 border-gray-600 text-green-400"
                  />
                  <Button className="bg-green-600 hover:bg-green-700 text-black">
                    <Icon name="Search" size={16} />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="bg-darknet-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-green-400 text-sm flex items-center">
                        <Icon name="File" size={16} className="mr-2" />
                        Файлы
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 text-sm">47,832 файлов найдено</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-darknet-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-green-400 text-sm flex items-center">
                        <Icon name="MessageSquare" size={16} className="mr-2" />
                        Объявления
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 text-sm">1,247 объявлений</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-darknet-gray-800 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-green-400 text-sm flex items-center">
                        <Icon name="Users" size={16} className="mr-2" />
                        Пользователи
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 text-sm">1,337 активных</p>
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
                    {mockMessages.map((msg) => (
                      <div key={msg.id} className="flex items-center space-x-3 p-2 hover:bg-darknet-gray-800 rounded cursor-pointer">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                          <Icon name="User" size={16} className="text-black" />
                        </div>
                        <div className="flex-1">
                          <p className="text-green-400 font-medium text-sm">{msg.user}</p>
                          <p className="text-xs text-gray-500">{msg.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-2 bg-darknet-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-green-400 flex items-center">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Чат
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
                    {mockMessages.map((msg) => (
                      <div key={msg.id} className="flex space-x-3">
                        <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                          <Icon name="User" size={16} className="text-black" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-green-400 font-medium text-sm">{msg.user}</span>
                            <span className="text-xs text-gray-500">{msg.time}</span>
                          </div>
                          <p className="text-gray-400 text-sm">{msg.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Введите сообщение..."
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
          <p className="text-gray-500 text-sm">
            Gubby.Net - Анонимная сеть | Всегда используйте VPN | Версия 2.4.1
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <Badge variant="outline" className="bg-darknet-gray-900 text-gray-400 border-gray-600">
              <Icon name="Lock" size={12} className="mr-1" />
              Шифрование: AES-256
            </Badge>
            <Badge variant="outline" className="bg-darknet-gray-900 text-gray-400 border-gray-600">
              <Icon name="Shield" size={12} className="mr-1" />
              Tor: Активен
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;