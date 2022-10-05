import { NextSeo } from 'next-seo';

interface IPageProps {
  title: string;
  description: string;
  children: any;
}

const Page = ({ title, description, children }: IPageProps) => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: 'https://wedding.vercel.app/',
          title: 'Adriano e Jessica te convidam para festa de casamento',
          images: [
            {
              url: 'https://lh3.googleusercontent.com/ceLEFUNqv6FE5jqTiXv6yU50PdA9KcZqlF9b56-Ms1iSuJkiVvnts_LOrCIY8IDcT9WaTHjEt0lqLE6CbqS32G4ekpZfz2uF7D6Q6kAuPh5icUrhlH5HZo7CO6yyW5mbBXtSopFmPjtq3EymLzVXZPfhRCerBSfRf8QPf8FPv7GDa4wvclcAGAM279-N3BdCART_wWWhUP5yKjZAiEQ4vA09MToOLwNZVlA9lV42r8iGKFnmYa1wTEfcA1xgvsHIXeH2gecSK2_L06Ms6zsH5rI_cPRwvva-NzRIz38iv-0CbD2btM-E0QnCCITFNlj_W4AlyRqY4uiDDHW4seAfOM_Z4cfkn154I66-cD881STTR7KPcAuVdIbGA-z6af_9pAXpolPX4KrUy9mxBKmSEr5cM3SAP83A0uVS-KYehWoKldjqS-1dft-pU0sJ41cYP85dYftNcy77-VC5Kercos8X5SfukwlOfTEgwcO_CV1sClrzQ07MnRrR_ZBqg1B4nV8CmTVzCX2qwCYJCHhb0bBHMkSaWTOPYpP-4HNPespwroonFbzPHntL8MJaKBv4lwjCbUP9K3spDXnewbf60dNhcdecItfqcatyCD5gi-tPtccz_tDLGGaMnboGmDndgzQ6JPml1KLvIuvDIdtmfcz84Ewt5IFqHotcqjKDTjEqEvVAWSX1hw9OGFcGvzGqzAvipjHJH3RN_sl9bdPIHjw8ZjW5ClwzBgs1ajME453ASFjkHMWR9QW8QIFmg9nN2hEYVq_CJ2YuuXiJD7Wm1Uefh_Lk3tFl1eypK5hOFQc5T9uQ3kTcIzbd3NSM8ONblt4Q4oGxpAkfwzyx93Xr1mnMGSA9rLftaGVEBjlRhAm43ETCR8zS2qXAd652SIJYcx4Qs4KvDhX2kYaWlvI408Yv8MxUJomoOuzwZUhV_udDYqiM8V_VUIr8W4weOYrxTOUt6aKO34oN=w328-h437-no?authuser=0',
              width: 240,
              height: 240,
              alt: 'Adriano e Jessica',
            },
          ],
        }}
      />

      {children}
    </>
  );
};

export default Page;
