import React, { useEffect } from 'react';

const AssetChecker = ({ assets }) => {
  useEffect(() => {
    assets.forEach(asset => {
      const img = new Image();
      img.src = process.env.PUBLIC_URL + '/src/assets/img/' + asset;

      img.onload = () => {
        console.log(`Asset ${asset} dimuat dengan sukses`);
      };

      img.onerror = () => {
        console.error(`Error loading asset ${asset}`);
      };
    });
  }, [assets]);

  return null; // Komponen ini tidak merender apa pun pada tampilan
};

export default AssetChecker;