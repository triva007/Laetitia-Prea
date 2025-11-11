import React from 'react';

// Meta Title: À propos de Laetitia Préa, Nutrithérapeute à Saint-Cloud & Boulogne
// Meta Description: Découvrez le parcours de Laetitia Préa, votre nutrithérapeute à Boulogne et Saint-Cloud. Approche holistique, bienveillante et scientifique.

const AboutPage = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-brand-dark">À propos de moi</h1>
            <p className="mt-4 text-lg text-gray-600">Mon parcours, ma philosophie et mon engagement pour votre bien-être.</p>
        </div>
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          <div className="md:col-span-2">
            <img 
              src="https://media.licdn.com/dms/image/v2/C5603AQFbE1MFF6mNFA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1661406455781?e=1764201600&v=beta&t=tZeF5Pz1NSKhV1lxF408fqwTCh_VzIrnkeS6iaHAOh4" 
              alt="Portrait de Laetitia Préa, nutrithérapeute" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:col-span-3 text-base md:text-lg text-gray-700">
            <p className="mb-4 leading-relaxed">
              Passionnée depuis toujours par les liens profonds entre l'alimentation, la santé et le bien-être, je me suis naturellement tournée vers la nutrithérapie pour en faire mon métier. Mon objectif est simple : vous donner les clés pour devenir acteur de votre santé grâce à une alimentation juste et personnalisée.
            </p>
            <p className="mb-4 leading-relaxed">
              Mon approche est résolument holistique. Je crois que notre corps est un écosystème complexe où chaque élément est interconnecté. C'est pourquoi mes accompagnements intègrent non seulement des conseils nutritionnels pointus, basés sur des données scientifiques, mais aussi une prise en compte de votre environnement, de votre gestion du stress et de votre hygiène de vie globale.
            </p>
            <p className="mb-4 leading-relaxed">
              La <strong className="text-brand-green">bienveillance</strong> est au cœur de ma pratique. Il n'y a pas de place pour la culpabilité ou les régimes restrictifs. Ensemble, nous construisons un chemin vers vos objectifs, à votre rythme, en célébrant chaque progrès.
            </p>
            <p className="mb-4 leading-relaxed">
              Installée à <strong className="text-brand-green">Saint-Cloud</strong>, je reçois de nombreux patients de <strong className="text-brand-green">Boulogne-Billancourt</strong> et des villes alentours comme Suresnes, Garches et Rueil-Malmaison pour vous offrir un accompagnement de proximité. Que ce soit en cabinet, à domicile ou en visio, je m'adapte à vos contraintes pour rendre le conseil en nutrition accessible à tous.
            </p>
            <p className="font-semibold text-brand-dark mt-6">
              Ma mission est de vous transmettre les outils et les connaissances pour que vous puissiez faire des choix éclairés, retrouver votre vitalité et cultiver un bien-être durable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;