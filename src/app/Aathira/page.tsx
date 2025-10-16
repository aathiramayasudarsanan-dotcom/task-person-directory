import Navbar from "@/components/Navbar";

export default function YourNamePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <Navbar />
      <div className="container mx-auto px-4 py-12">

        {/* Person Profile */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            {/* Header */}
            <div className="bg-egradient-to-r from-green-500 to-blue-600 px-8 py-12">
              <div className="flex items-center space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-4xl">
                    A {/* First letter of your name */}
                  </div>
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    Aathira M S
                  </h1>
                  <p className="text-xl text-blue-100 mb-2">b tech computer science </p>
                  <p className="text-blue-200">Age: 20• </p> second year
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Bio Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  About
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  ✨I always tries to bring imagination to life through arts…!🥰.  
Haiii…💫
 Iam Aathira M S from second year CSE.⭐I breathe new life into familiar things,turning the habitual into the remarkable.Every time I believes in the magical hands of Creative ideas which transforming the ordinary things into extra ordinary treasures.     l’m someone who loves to make videos,cilck photos, write literature,design posters.Sometimes l turn  myself into a tricky storyteller…!Always a creative hunter of innovative endeavors .☄
If l had to describe my style in one word:emotional creative-because every piece comes from what l feel.
If my creative style was a food :-Milkybar🥛🍫-simple, heartfelt, but always leaving a lasting taste.
I want to learn more in Animations, Editing Skills🥰
                </p>
              </div>

              {/* Skills Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Skills & Interests
                </h2>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                HTML /CSS
                  </span>
                  <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                    figma
                  </span>
                  <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                    web devolpment
                  </span>
                  {/* Add more skills/interests as needed */}
                </div>
              </div>

              {/* Contact Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Get in Touch
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-600 dark:text-gray-400">📧</span>
                    <span className="text-gray-700 dark:text-gray-300">aathiramayasudarsanan04@gmail</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-600 dark:text-gray-400">🔗</span>
                    <a href="https://www.linkedin.com/in/aathira-m-s-383838332?utm_source=share_via&utm_content=profile&utm_medium=member_ios" className="text-blue-600 dark:text-blue-400 hover:underline">
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-600 dark:text-gray-400">🐙</span>
                    <a href="https://github.com/aathiramayasudarsanan-dotcom " className="text-blue-600 dark:text-blue-400 hover:underline">
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}