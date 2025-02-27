import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
    {
      name: 'Apple 18W USB-C Power Adapter USB Type-C белый',
      description: 'Адаптер Apple 18W USB-C Power Adapter представляет собой компактное и эффективное зарядное устройство, предназначенное для быстрой и эффективной зарядки ваших устройств.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h93/h72/64377059409950.jpg?format=gallery-medium',
      ],
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000'
    },
    {
      name: 'Apple iPhone 13',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
      ],
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      name: 'SSD Kingston SNV3S/1000G 1000 Гб',
      description: 'Kingston’s NV3 PCIe 4.0 NVMe SSD — это новое решение для хранения данных на основе контроллера NVMe Gen 4x4, обеспечивающее скорость чтения/записи до 6000/5000 МБ/с.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/pcd/p3a/11296042.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb1/p3a/11296043.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p94/p3a/11296044.jpg?format=gallery-medium'
      ],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/ssd-kingston-snv3s-1000g-1000-gb-123793481/?c=750000000'
    },
    {
      name: 'North Bayou NB F-80 черный',
      description: 'Для оптимальной организации пространства на рабочем столе дома или в офисе пригодится настольный кронштейн для мониторов и телевизоров с системой газлифт.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7a/h5d/64016108879902.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h46/h3f/64016110977054.jpg?format=gallery-medium',
      ],
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/north-bayou-nb-f-80-chernyi-101143323/?c=750000000'
    },
    {
      name: 'Logitech MX Master 3',
      description: 'Logitech MX Master 3 предлагает эргономичный дизайн, настраиваемые кнопки и сверхбыстрое прокручивание, что делает ее идеальным выбором для профессионалов.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/pad/p8e/25625883.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe5/p8e/25625885.jpg?format=gallery-medium',
      ],
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/logitech-mx-master-3-darkgrey-temno-seryi-134843985/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gbraid=0AAAAAC7-v7hX_ra8w4HJ8tMu10nVpU7Sq&gclid=CjwKCAiAt4C-BhBcEiwA8Kp0CaU0d02X65fVc52S8AIme09vgMOnWZ-WhKLAr1shy-5XZs8JC6nu0BoCRdsQAvD_BwE'
    },
    {
      name: 'Dell XPS 13',
      description: 'Dell XPS 13 оснащен 13.4-дюймовым дисплеем InfinityEdge, процессорами Intel 11-го поколения и элегантным легким корпусом.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h84/h4b/69530623737886.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h04/h6d/69530624262174.jpg?format=gallery-medium',
      ],
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/dell-xps-15-9520-15-6-32-gb-ssd-1000-gb-win-11-pro-210-bdvf-13-109120938/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gbraid=0AAAAAC7-v7hX_ra8w4HJ8tMu10nVpU7Sq&gclid=CjwKCAiAt4C-BhBcEiwA8Kp0CaU0d02X65fVc52S8AIme09vgMOnWZ-WhKLAr1shy-5XZs8JC6nu0BoCRdsQAvD_BwE'
    },
    {
      name: '27" Samsung LS27D360GAIXCI черный',
      description: 'Изогнутый монитор Samsung 27" обеспечивает захватывающий просмотр с разрешением 1080p и частотой обновления 60 Гц.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8c/p39/7201173.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p53/p39/7201175.jpg?format=gallery-medium',
      ],
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/27-samsung-ls27d360gaixci-chernyi-129713352/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gbraid=0AAAAAC7-v7hX_ra8w4HJ8tMu10nVpU7Sq&gclid=CjwKCAiAt4C-BhBcEiwA8Kp0CaU0d02X65fVc52S8AIme09vgMOnWZ-WhKLAr1shy-5XZs8JC6nu0BoCRdsQAvD_BwE'
    },
    {
      name: 'Принтер HP LaserJet Pro MFP M428fdw',
      description: 'HP LaserJet Pro MFP M428fdw — это многофункциональный принтер с высокой скоростью печати и поддержкой беспроводного подключения.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/ha4/63767532699678.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h05/ha7/63767533322270.jpg?format=gallery-medium',
      ],
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/mfu-hp-laserjet-pro-mfp-m428fdw-1600611/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gbraid=0AAAAAC7-v7hX_ra8w4HJ8tMu10nVpU7Sq&gclid=CjwKCAiAt4C-BhBcEiwA8Kp0CaU0d02X65fVc52S8AIme09vgMOnWZ-WhKLAr1shy-5XZs8JC6nu0BoCRdsQAvD_BwE'
    },
    {
      name: 'Generic SF-400',
      description: 'Современные электронные кухонные весы имеют элегантную платформу из пластика. Весы выполнены в белом корпусе. Предел взвешивания 10 кг.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/ha8/64094074798110.jpg?format=gallery-medium',
      ],
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gbraid=0AAAAAC7-v7hX_ra8w4HJ8tMu10nVpU7Sq&gclid=CjwKCAiAt4C-BhBcEiwA8Kp0CaU0d02X65fVc52S8AIme09vgMOnWZ-WhKLAr1shy-5XZs8JC6nu0BoCRdsQAvD_BwE'
    },
    {
      name: 'Принтер HP LaserJet Pro MFP M428fdw',
      description: 'Глубина стиральной машины LG F2J3NS0W всего 44 см, благодаря чему она поместится даже в небольшую ванную комнату. Барабан вмещает 6 кг сухого белья, чего вполне достаточно для семьи из трёх-четырёх человек. Эта модель снабжена инверторным двигателем с прямым приводом, он отличается более длительным сроком службы, чем обычный, так как в его конструкции нет щёток и ремня.',
      imageUrls: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium',
      ],
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_30k-100k&gbraid=0AAAAAC7-v7hX_ra8w4HJ8tMu10nVpU7Sq&gclid=CjwKCAiAt4C-BhBcEiwA8Kp0CaU0d02X65fVc52S8AIme09vgMOnWZ-WhKLAr1shy-5XZs8JC6nu0BoCRdsQAvD_BwE'
    },
  ];



  imgIndex: {[key: string]: number } = {};

  constructor() {
    this.products.forEach((product) => {
      this.imgIndex[product.name] = 0;
    });
  }

  nextImg(product: Product) {
    const currentIndex = this.imgIndex[product.name];
    const nextIndex = (currentIndex + 1) % product.imageUrls.length;
    this.imgIndex[product.name] = nextIndex;
  }

  prevImg(product: Product) {
    const currentIndex = this.imgIndex[product.name];
    const prevIndex = (currentIndex - 1 + product.imageUrls.length) % product.imageUrls.length;
    this.imgIndex[product.name] = prevIndex;
  }

shareVisible: { [key: string]: boolean } = {};


toggleShare(product: Product) {
  this.shareVisible[product.name] = !this.shareVisible[product.name];
}

shareOnWhatsApp(product: Product) {
  const url = `https://api.whatsapp.com/send?text=Check out this product: ${product.link}`;
  window.open(url, '_blank');
}

shareOnTelegram(product: Product) {
  const url = `https://t.me/share/url?url=${product.link}&text=Check out this product`;
  window.open(url, '_blank');
}
}