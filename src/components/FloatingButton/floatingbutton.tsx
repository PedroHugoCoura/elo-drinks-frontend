import { FloatButton } from 'antd';
import { WhatsAppOutlined } from '@ant-design/icons';

export default function FloatingButtonWhatsApp() {
  return (
    <FloatButton
      icon={<WhatsAppOutlined />}
      type="primary"
      style={{ right: 24, bottom: 24 }}
      tooltip="Fale com um consultor"
      onClick={() => window.open('https://wa.me/5599999999999', '_blank')}
    />
  );
}
