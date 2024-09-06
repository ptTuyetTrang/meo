// tina-config.js
import { TinaProvider, TinaCMS } from 'tinacms';
import { EditButton, InlineForm, InlineTextField } from 'tinacms';

const cms = new TinaCMS({
  // Các tùy chọn cấu hình khác
  apis: {
    // Cấu hình Tina Cloud API
    tina: {
      apiUrl: 'https://tina-cloud.example.com/api',
    },
  },
});

export default cms;
