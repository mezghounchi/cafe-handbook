
import React from 'react';
import TeamCard from '../TeamCard';
import { TEAM_MEMBERS } from '../../constants';

const Chapter3: React.FC = () => {
  return (
    <>
      <h2 className="text-4xl font-extrabold text-[#8B5E3C] mb-6 pb-3 border-b-2 border-[#EAE0D5]">فصل سوم: تیم ما و نقش‌ها</h2>
      
      <h3 className="text-2xl font-bold text-[#4A3F35] mt-8 mb-4">۳-۱: با تیم ما آشنا شو!</h3>
      <p className="mb-8 text-lg leading-9 text-[#5f5349]">موفقیت ما نتیجه‌ی کار تیمی و هماهنگی آدماییه که با عشق و انرژی کار می‌کنن. اینجا با چهره‌های دوست‌داشتنی خانواده‌ی کافه فردوسی آشنا می‌شی:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {TEAM_MEMBERS.map((member) => (
          <TeamCard
            key={member.name}
            name={member.name}
            description={member.description}
            imgSrc={member.imgSrc}
            alt={member.alt}
          />
        ))}
      </div>
      
      <h3 className="text-2xl font-bold text-[#4A3F35] mt-12 mb-4">۳-۲: نقش‌ها در کافه فردوسی</h3>
      <p className="text-lg leading-9 text-[#5f5349]">تیم ما از نقش‌ها و وظایf مختلفی تشکیل شده تا عملکرد مجموعه همیشه هماهنگ و بی‌نقص باشه:</p>

      <h4 className="text-xl font-bold text-[#4A3F35] mt-8 mb-4">تیم راهبری:</h4>
      <p className="text-lg leading-9 text-[#5f5349]">رهبری و هدایت کلی مجموعه. مسئولیت نهایی تمام امور از جمله مدیریت مالی، رضایت مشتریان، استخدام و آموزش، و مهم‌تر از همه، پشتیبانی و رهبری تیم.</p>
      
      <h4 className="text-xl font-bold text-[#4A3F35] mt-8 mb-4">مدیر داخلی:</h4>
      <p className="text-lg leading-9 text-[#5f5349]">انجام کارهای اجرایی روزمره، هماهنگی‌های مورد نیاز بین بخش‌ها، تهیه مواد اولیه و مهم‌تر از همه، بودن به عنوان گوش شنوای اعضای تیم و رسیدگی به دغدغه‌هایشان.</p>

      <h4 className="text-xl font-bold text-[#4A3F35] mt-8 mb-4">سالن‌دار (میزبان):</h4>
      <p className="text-lg leading-9 text-[#5f5349]">خط مقدم ارتباط با مهمانان. مسئول خوشامدگویی، گرفتن سفارش، ارائه سرویس بی‌نقص و همچنین حفظ پاکیزگی و آراستگی همیشگی سالن برای فراهم کردن فضایی دلنشین برای مهمانان.</p>
      
      <h4 className="text-xl font-bold text-[#4A3F35] mt-8 mb-4">سرپرست بار:</h4>
      <p className="text-lg leading-9 text-[#5f5349]">متخصص و مدیر بخش بار. مسئول کنترل کیفیت تمام نوشیدنی‌ها، مدیریت موجودی بار، آموزش باریستاها و بارتندرها و خلق آیتم‌های جدید.</p>

      <h4 className="text-xl font-bold text-[#4A3F35] mt-8 mb-4">باریستا و بارتندر:</h4>
      <p className="text-lg leading-9 text-[#5f5349]">هنرمندان پشت بار. مسئول آماده‌سازی تمام نوشیدنی‌های گرم و سرد با بالاترین کیفیت و استاندارد.</p>

      <h4 className="text-xl font-bold text-[#4A3F35] mt-8 mb-4">سرآشپز اجرایی (Executive Chef):</h4>
      <p className="text-lg leading-9 text-[#5f5349]">قلب تپنده آشپزخانه. مسئول کنترل کیفی تمام غذاها، مدیریت تیم، کنترل بهداشت و دورریز، و هدایت کلی آشپزخانه.</p>

      <h4 className="text-xl font-bold text-[#4A3F35] mt-8 mb-4">سرپرست آشپزخانه (Sous Chef):</h4>
      <p className="text-lg leading-9 text-[#5f5349]">در غیاب سرآشپز اجرایی، تمام وظایف وی را بر عهده دارد. پاسخگوی سوالات پرسنل، مسئول هماهنگی‌های داخلی و مدیریت شرایط بحرانی.</p>

      <h4 className="text-xl font-bold text-[#4A3F35] mt-8 mb-4">شفِ دِ پارتی / مسئول سکشن (Chef de Partie):</h4>
      <p className="text-lg leading-9 text-[#5f5349]">مسئول یک بخش مشخص در آشپزخانه. وظایف او شامل چک کردن موجودی، نظافت، هماهنگی و مدیریت تیم در سکشن مربوطه، و اطمینان از آماده‌سازی سفارش‌ها با بالاترین کیفیت است.</p>

      <h4 className="text-xl font-bold text-[#4A3F35] mt-8 mb-4">کوزینه / آشپز (Cuisinier / Cook):</h4>
      <p className="text-lg leading-9 text-[#5f5349]">مسئول پخت و ارائه محصولات کلی. با تمام اعضای تیم در راستای پیشبرد اهداف کلی مجموعه همکاری می‌کند.</p>

      <h4 className="text-xl font-bold text-[#4A3F35] mt-8 mb-4">کُمی (Commis Chef):</h4>
      <p className="text-lg leading-9 text-[#5f5349]">عضو جدید تیم آشپزخانه که در حال آموزش و یادگیری مهارت‌های اولیه زیر نظر آشپزهای دیگر است.</p>

      <h4 className="text-xl font-bold text-[#4A3F35] mt-8 mb-4">مسئول نظافت و شستشو:</h4>
      <p className="text-lg leading-9 text-[#5f5349]">قهرمانان پشت صحنه. ضامن پاکیزگی ظروف و محیط، که کیفیت کار ما را تکمیل می‌کنند.</p>
    </>
  );
};

export default Chapter3;
