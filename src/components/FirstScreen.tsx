import Image from "next/image";
import React from "react";

import iconZucagram from "../../public/iconZucagram.png";
import { GrAppleAppStore } from "react-icons/gr";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import Link from "next/link";

export const FirstScreen = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <Image
          className="w-32 m-auto mt-10 rounded-lg"
          src={iconZucagram}
          alt="logo zucagram"
        />
        <p className="text-xl font-bold">Zucagram</p>
      </div>
      <div className="flex items-center text-center italic w-[350px] h-[230px] bg-zinc-900 m-auto mt-3 rounded-xl">
        <p className="p-2">
          Você é um brasileiro vivendo fora do país ou sonha em se mudar para o
          exterior? O Zucagram é a rede social perfeita para você! Conecte-se
          com compatriotas, compartilhe experiências, receba dicas valiosas e
          encontre apoio em cada etapa da sua jornada. Não perca a chance de
          fazer parte desta comunidade global e vibrante.
        </p>
      </div>
      <div className="flex justify-center items-center gap-4 flex-col mt-5">
        <p className="text-center text-xl font-bold">Baixe nosso App agora!</p>
        <Link href="https://apps.apple.com/pt/app/zucagram/id6503670083?l=en-GB">
          <button className="flex items-center justify-center gap-2 w-[300px] h-10 bg-[#038C4C] rounded-lg font-bold">
            <GrAppleAppStore size={30} />
            DOWNLOAD IOS
          </button>
        </Link>
        <Link href="">
          <button className="flex items-center justify-center gap-2 w-[300px] h-10 bg-[#038C4C] rounded-lg font-bold">
            <IoLogoGooglePlaystore size={30} />
            DOWNLOAD ANDROID
          </button>
        </Link>
      </div>
    </>
  );
};
