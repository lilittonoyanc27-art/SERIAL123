import React from 'react';
import { motion } from 'framer-motion';
import { 
  Tv, 
  Clapperboard, 
  Sparkles, 
  Coffee,
  Gem,
  Clock,
  Quote
} from 'lucide-react';

export default function ArmenianTeaSeries() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans p-4 md:p-8 overflow-x-hidden relative">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/5 to-transparent" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* TV Show Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-block p-6 bg-blue-600 rounded-[2.5rem] shadow-xl border-4 border-yellow-400 mb-8">
            <Tv className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-blue-600 italic mb-4 leading-tight">
            📺 Սերիալ. «Հայկական թեյի գաղտնիքը»
          </h1>
          <div className="inline-block px-8 py-2 bg-yellow-400 rounded-full text-blue-900 font-black text-sm uppercase tracking-widest shadow-lg">
            (Մաս 5 — Երկու մեդալիոնների գաղտնիքը)
          </div>
        </motion.header>

        {/* Full Script Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/80 backdrop-blur-2xl rounded-[3rem] p-8 md:p-16 shadow-2xl border-4 border-zinc-50 space-y-12 relative overflow-hidden"
        >
          {/* Setting */}
          <div className="bg-zinc-900 text-white p-8 rounded-[2rem] border-l-8 border-blue-600 shadow-lg">
            <p className="text-2xl font-bold italic leading-relaxed">
              (Մադրիդ: Ֆրանսիսկոյի գրասենյակը: Բոլորը քարացել են:)
            </p>
          </div>

          {/* Narrative 1 */}
          <div className="relative group">
            <div className="absolute -left-4 top-0 w-1 h-full bg-cyan-500 rounded-full opacity-20 group-hover:opacity-100 transition-opacity" />
            <p className="text-2xl font-medium leading-relaxed text-zinc-600 italic">
              Հանկարծ դուռը բացվում է... Ներս են մտնում Ջուզեպպեն և Իզաբել Կառլոտա դե լա Ռոսա ի Մարտինես դե Օս ի Վիսկայը: Ջուզեպպեն կանգնում է դռան մոտ և երկար ու լուրջ նայում է Ֆրանսիսկոյին: Ֆրանսիսկոն քարանում է, գաթայի կտորը ձեռքին:
            </p>
          </div>

          {/* Dialogue 1: Maria */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black uppercase tracking-widest text-blue-600">María:</span>
              <span className="text-sm font-bold text-zinc-400 italic">(նայում է Ջուզեպպեին, հետո Իզաբելին և հանկարծ նկատում է մի բան)</span>
            </div>
            <div className="bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100 shadow-sm">
              <p className="text-4xl font-black text-zinc-800 italic mb-4">— ¡Vaya! ¿Qué hay en el cuello de Isabel?</p>
              <p className="text-xl font-bold text-zinc-500 italic">(Վա՜յ: Ի՞նչ կա Իզաբելի վզին:)</p>
            </div>
          </div>

          {/* Narrative 2 */}
          <div className="p-8 bg-zinc-50 rounded-[2rem] border-2 border-zinc-100 italic text-xl text-zinc-600 leading-relaxed">
            (Իզաբելը լուռ նայում է Ֆրանսիսկոյին: Նրա վզին փայլում է մի ոսկե մեդալիոն... հենց այն նույնը, որը Ֆրանսիսկոն ժամանակին նվիրել էր նրան:)
          </div>

          {/* Dialogue 2: Pablo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black uppercase tracking-widest text-cyan-500">Pablo:</span>
              <span className="text-sm font-bold text-zinc-400 italic">(աչքերը չռած)</span>
            </div>
            <div className="bg-cyan-50 p-8 rounded-[2.5rem] border-2 border-cyan-100 shadow-sm">
              <p className="text-4xl font-black text-zinc-800 italic mb-4">— ¡¿Qué?! ¡Es el medallón! Francisco, ¡tú tienes el mismo dibujo en tu oficina!</p>
              <p className="text-xl font-bold text-zinc-500 italic">(Ի՞նչ: Մեդալիո՞նն է: Ֆրանսիսկո՛, դու քո գրասենյակում նույն նկարից ունես:)</p>
            </div>
          </div>

          {/* Dialogue 3: Isabel */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black uppercase tracking-widest text-yellow-600">Isabel:</span>
              <span className="text-sm font-bold text-zinc-400 italic">(դանդաղ մոտենում է սեղանին)</span>
            </div>
            <div className="bg-yellow-50 p-8 rounded-[2.5rem] border-2 border-yellow-100 shadow-sm">
              <p className="text-4xl font-black text-zinc-800 italic mb-4">— Hola, Francisco. Yo tengo tu regalo. ¿Todavía bebes té armenio?</p>
              <p className="text-xl font-bold text-zinc-500 italic">(Ողջո՜ւյն, Ֆրանսիսկո: Ես ունեմ քո նվերը: Դու դեռ հայկական թեյ ես խմում:)</p>
            </div>
          </div>

          {/* Dialogue 4: Giuseppe */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black uppercase tracking-widest text-zinc-800">Giuseppe:</span>
              <span className="text-sm font-bold text-zinc-400 italic">(խիստ ձայնով)</span>
            </div>
            <div className="bg-zinc-100 p-8 rounded-[2.5rem] border-2 border-zinc-200 shadow-sm">
              <p className="text-4xl font-black text-zinc-800 italic mb-4">— Francisco Javier... hay que hablar. No hay tiempo para té.</p>
              <p className="text-xl font-bold text-zinc-500 italic">(Ֆրանսիսկո Խավիեր... պետք է խոսել: Թեյի համար ժամանակ չկա:)</p>
            </div>
          </div>

          {/* Narrative 3 */}
          <div className="p-8 bg-zinc-50 rounded-[2rem] border-2 border-zinc-100 italic text-xl text-zinc-600 leading-relaxed">
            (Մարիան երկար նայում է Իզաբելի մեդալիոնին։ Նրա հայացքը քարանում է, և նա հանկարծ հիշում է... նա ձեռքը տանում է դեպի իր գրպանը։)
          </div>

          {/* Dialogue 5: Maria Again */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Quote className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black uppercase tracking-widest text-blue-600">María:</span>
              <span className="text-sm font-bold text-zinc-400 italic">(շշնջալով, ինքն իրեն)</span>
            </div>
            <div className="bg-blue-50 p-8 rounded-[2.5rem] border-2 border-blue-100 shadow-sm">
              <p className="text-4xl font-black text-zinc-800 italic mb-4">— ¡No puede ser! Yo también tengo un medallón...</p>
              <p className="text-xl font-bold text-zinc-500 italic">(Չի կարող պատահել։ Ես նույնպես ունեմ մի մեդալիոն...)</p>
            </div>
          </div>

          {/* Narrative 4 */}
          <div className="p-8 bg-zinc-900 text-white rounded-[2rem] border-l-8 border-yellow-400 shadow-lg italic text-xl leading-relaxed">
            (Մարիան հանում է իր մեդալիոնը, որի վրա պատկերված է մի փոքրիկ թեյնիկ (tetera)։ Նա նայում է Իզաբելին, հետո Ֆրանսիսկոյին։ Ֆրանսիսկոն գունատվում է։)
          </div>

          {/* Cliffhanger */}
          <div className="text-center pt-12">
            <div className="inline-block bg-blue-600 text-white px-12 py-6 rounded-full border-4 border-yellow-400 shadow-2xl">
              <p className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
                Todos: — ¡¡¡CONTINUARÁ...!!!
              </p>
              <p className="text-xl font-bold mt-2 opacity-80">(ՇԱՐՈՒՆԱԿԵԼԻ...)</p>
            </div>
          </div>

          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Clapperboard className="w-96 h-96" />
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-20 text-center pb-12">
          <div className="inline-flex items-center gap-3 bg-zinc-100 px-8 py-3 rounded-full border border-zinc-200">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">
              PRODUCCIÓN: AIS STUDIOS 2026
            </span>
          </div>
        </footer>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
        body { 
          font-family: 'Inter', sans-serif; 
          background: #ffffff;
        }
      `}} />
    </div>
  );
}
