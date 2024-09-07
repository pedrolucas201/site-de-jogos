import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

interface ShareButtonsProps {
  gameId: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ gameId }) => {
  const isProduction = process.env.NODE_ENV === 'production';
  const baseUrl = isProduction ? 'https://meusitejogos.com' : 'http://localhost:3000';
  const shareUrl = `${baseUrl}/games/${gameId}`;

  return (
    <div>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon />
      </a>

      <a
        href={`https://www.instagram.com/?url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </a>
      {/* Adicione mais botões de redes sociais conforme necessário */}
    </div>
  );
};

export default ShareButtons;
