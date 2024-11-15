import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Frame from './pages/Frame';
import News from './pages/News';
import Chat from './pages/Chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Frame />}>
          {/* 默认重定向到 news 页面 */}
          <Route index element={<Navigate to="/news" replace />} />
          {/* 子路由 */}
          <Route path="news" element={<News />} />
          <Route path="chat" element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;