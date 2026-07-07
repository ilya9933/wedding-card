import PageSection from '../layout/PageSection';
import SectionTitle from '../ui/SectionTitle';

import image1 from '../../../assets/carousel/IMG_1265.jpg';
import image2 from '../../../assets/carousel/IMG_2480.jpg';
import image3 from '../../../assets/carousel/IMG_1930.jpg';
import image4 from '../../../assets/carousel/IMG_5620.jpg';
import image5 from '../../../assets/carousel/IMG_6753 2.jpg';
import image6 from '../../../assets/carousel/IMG_5627.jpg';
import image7 from '../../../assets/carousel/IMG_5648.jpg';
import image8 from '../../../assets/carousel/IMG_6750.jpg';
import image9 from '../../../assets/carousel/IMG_4183.jpg';

import PhotoSlider from "../ui/PhotoSlider.tsx";

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
];

export default function Story() {
    return (
        <PageSection background="bg-ivory">
            <div className="mb-[400px] mx-auto max-w-6xl">

                <div className="mb-16 text-center">
                    <SectionTitle>Наша история</SectionTitle>
                    <div className="mt-4 text-3xl text-rose">♡</div>
                </div>

                <PhotoSlider images={images} />

                <div className="mx-auto mt-20 max-w-2xl text-center">

                    <h3 className="font-serif text-4xl text-text">
                        Всё началось со случайной встречи
                    </h3>

                    <p className="mt-8 leading-9 text-lg text-muted">
                        Мы просто вместе играли в мафию, но вне ее не общались.
                        <br />
                        Однажды, он меня позвал погулять. Начали разговаривать, и сразу почувствовали непринуждённость и понимание.
                        <br />
                        С тех пор мы стали проводить всё больше времени вместе. Вскоре мы осознали, что стали неотъемлемой частью жизни друг друга
                    </p>

                </div>



            </div>
        </PageSection>
    );
}