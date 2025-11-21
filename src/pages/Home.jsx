import React, { useEffect, useState } from "react";
import { FaRocket } from "react-icons/fa";

export default function Home() {
  const [show, setShow] = useState(false); // Header animation
  const [showTask, setShowTask] = useState(false); // Show task section
  const [showTaskAnimation, setShowTaskAnimation] = useState(false); // Task animation
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");

  // loading + error state
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showTask) {
      const timer = setTimeout(() => setShowTaskAnimation(true), 50);
      return () => clearTimeout(timer);
    } else {
      setShowTaskAnimation(false);
    }
  }, [showTask]);

  // Frontend-only summarization
  const handleSummarize = () => {
    setError("");
    setSummary("");

    const text = inputText.trim();
    if (!text) {
      setError("Please enter some text to summarize.");
      return;
    }

    setLoading(true);

    // Simulate loading
    setTimeout(() => {
      const predefinedInput1 =
        "Atoms of radioactive elements can split. According to Albert Einstein, mass and energy are interchangeable under certain circumstances. When atoms split, the process is called nuclear fission. In this case, a small amount of mass is converted into energy. Thus the energy released cannot do much damage. However, several subatomic particles called neutrons are also emitted during this process. Each neutron will hit a radioactive element releasing more neutrons in the process. This causes a chain reaction and creates a large amount of energy. This energy is converted into heat which expands uncontrollably causing an explosion. Hence, atoms do not literally explode. They generate energy that can cause explosions.";
      const predefinedInput2 =
        "Since March 8, 1990, Women’s Day has been observed by SAARC (South Asian Association for Regional Cooperation) comprising seven countries namely India, Pakistan, Nepal, Bhutan, Bangladesh, Sri Lanka and Maldives. The day is celebrated to highlight the problems of the girl child in these countries. It is very sad that girl children are subjected to extreme neglect and disrespect, especially in underdeveloped countries. The birth of a girl child is seen by parents as a cause of pity. They are deprived of proper nutrition, education, economic opportunities and social status or respect. We must eliminate these prejudices and provide a bright future for girls by educating them.";
      const predefinedInput3 =
        "Everyone knows that paper is made from trees. But when one looks at trees, one cannot imagine that something so soft and fragile as the paper is made is so hard and strong. Plant materials such as wood are made of fibres known as cellulose. It is the primary ingredient in paper making. Raw wood is first converted into pulp consisting of a mixture of Cellulose, lignin, water and some chemicals. The pulp can be made mechanically through grinders or through chemical processes. Short fibres are produced by mechanical grinding. The paper produced in this way is weak and is used to make newspapers, magazines and phonebooks.";
      const predefinedInput4 =
        "Gardening is my favourite hobby. I own a small plot of land next to our house. I cultivate gardening there. Every day, I spend half an hour gardening. After returning from my morning walk, I go to my garden with a spade and a bucket of water. I prepare the soil, prune the plants, and water them. I also use insecticides and fertilisers. My heart leaps with joy when I see the plants swaying in the wind. I feel heavenly pleasure as I watch them grow day by day.";
      const predefinedInput5 =
        "Home is the place where we return to rest after a day’s work, and where parents and children meet together and have a carefree and joyful time. Our family consists of three members—father, mother, and brother. We live in a rural area. It is free from the hustle and bustle of city life. It is especially famous for its scenic beauty. I am the most important member of the family. Everyone trusts my judgement and agrees to follow my suggestions.";
      const predefinedInput6 =
        "The Dowry system is bad in society. It has turned the sacred matter of marriage into a business deal. The bride is regarded as a marketable commodity. Bride’s parents are often put under inhumane pressure for a handsome dowry. Sometimes they become destitute to give their daughters in marriage. In many cases, young brides are brutally tortured or pushed to commit suicide. To eliminate this social evil, a complete change in society’s outlook is necessary. Women should be treated as equal partners to men.";
      const predefinedInput8 =
        "Training in a specific branch of applied science, such as engineering, agriculture, weaving, spinning, etc., is considered technical education. It contrasts with liberal education which aims to impart general knowledge of arts and sciences. In the modern era, technical education is extremely important. Today, a country’s prosperity is determined by its industrial development. The more advanced the country is in industry, the more prosperous the country is. Technical knowledge is now the backbone of industrial progress, which holds the key to national prosperity.";
      const predefinedInput9 =
        "After summer comes the rainy season. It lasts from mid-June to the end of September. During this time of year, the sky is cloudy. It drizzles and rains cats and dogs sometimes. Rains provide relief from the oppressive summer heat. Green leaves are developed by the tree. Ponds and rivers are full of water. Monsoon is a boon for farmers. Rainwater softens the soil and makes it suitable for cultivation. Monsoon has some disadvantages. Due to heavy and incessant rainfall, the roads, especially in villages, become muddy.";
      const predefinedInput10 =
        "If I win a lottery People love to daydream. I am no exception to this universal affection of people. I often daydream that I won the first prize in the lottery and became a millionaire. Now, if I win the lottery for five lakh rupees, I will spend two lakh rupees on my personal comforts and luxuries. I plan to demolish my father’s straw house and replace it with a two-story paved structure.I will buy a laptop and a bike. I will spend the remaining three lakh rupees to ease the suffering of the people. I will keep the larger part of this money in a bank and help the poor people with the interest on this money.";
      const predefinedInput11 =
        "People live in society. Hence we cannot identify with those who live near us and work with us. This acquaintance sometimes turns into friendship. You will not find friendless people. Even monks have friends. I also have friends. Peter is my close friend. He is my friend since childhood. He comes from a poor family. But he is very talented. My next best friend is Lisa. She is a complete foil to Peter. She is the son of a big man. She is neither intelligent nor industrious. She often goes out hunting birds with a gun. I have some other friends. They are John, Nisha and Camellia.";
      const predefinedInput12 =
        "Television is a wonderful scientific gift. It combines the advantages of cinema and radio. The most important and effective form of entertainment is television. It broadcasts live telecasts of major events. It is also the most effective advertising medium. It facilitates mass education. It is very important in the world of sports and games. However, it has some drawbacks. It is used to enhance the image of specific individuals. Some programmes are inappropriate for pupils to watch. There is a danger of becoming addicted to television. As a result, academic performance suffers. It also has an impact on vision. As a result, programmes must be carefully chosen.";
      const predefinedInput13 =
        "Vocational educationEducation for a vocation (profession) is known as vocational education. Some of its forms include computer applications, engineering, medicine, agriculture, business management, chartered accountancy, costing, etc. From the perspective of India’s economic progress, it is very important. Moreover, the country is undergoing rapid industrialization. Business is expanding. Vocationally trained personnel, especially in computer applications, are required to run various industrial units, business establishments and trade centres.";

      const predefinedSummary1 =
        "This paragraph explains nuclear fission, where atoms of radioactive elements split, converting a small amount of mass into energy. Neutrons released in the process create a chain reaction that generates huge amounts of energy, which becomes heat and can cause explosions. It clarifies that atoms themselves do not explode, but the energy they release can lead to powerful blasts.";
      const predefinedSummary2 =
        "This paragraph describes how SAARC countries observe Women’s Day on March 8 to highlight the problems faced by the girl child. It stresses that girls often suffer neglect, poor nutrition, lack of education and low social status. The author insists that these prejudices must be removed and that education is crucial to giving girls a bright future.";
      const predefinedSummary3 =
        "This paragraph explains that paper is made from wood, which contains cellulose fibres. Wood is turned into pulp, a mix of cellulose, lignin, water and chemicals. The pulp can be produced mechanically or chemically, and mechanically produced pulp makes weaker paper used for newspapers, magazines and phonebooks.";
      const predefinedSummary4 =
        "Here the writer describes gardening as a favourite hobby. They have a small plot next to their house and work in it daily, preparing the soil, pruning plants and watering them. Watching the plants grow and sway in the wind gives them great joy and a sense of heavenly pleasure.";
      const predefinedSummary5 =
        "This paragraph describes home as a place of rest and happiness where family members spend time together. The writer’s family has three members and lives in a peaceful rural area known for its beauty. The narrator feels valued and believes everyone in the family trusts their judgement and suggestions.";
      const predefinedSummary6 =
        "This paragraph criticizes the dowry system for turning marriage into a business deal and treating the bride like a commodity. It describes how brides’ parents face pressure, poverty and sometimes tragedy, as young women are tortured or driven to suicide. The author calls for a change in social attitudes and equal treatment of women.";
      const predefinedSummary7 =
        "This paragraph argues that technical education, such as engineering or agriculture, is essential in the modern era. A country’s prosperity depends on industrial development, and technical knowledge is the backbone of such progress. As industry and business expand, vocationally trained people are needed to run factories, offices and trade centres.";
      const predefinedSummary8 =
        "This paragraph describes the rainy season after summer, lasting from mid-June to September. It brings clouds, showers and heavy rain that cools the heat and turns nature green. Farmers benefit because rainwater prepares the soil for cultivation, but heavy rain can also cause muddy roads and inconvenience, especially in villages.";
      const predefinedSummary9 =
        "The writer daydreams about winning a lottery and becoming rich. They plan to spend part of the money on personal comforts like a new house, laptop and bike, and keep the rest in a bank. Using the interest, they want to help poor people and reduce their suffering, showing both personal wishes and social concern.";
      const predefinedSummary10 =
        "This paragraph explains that humans naturally form friendships with those around them. The writer talks about several friends, especially Peter, who is poor but intelligent, and Lisa, who is rich but neither hardworking nor clever. Other friends like John, Nisha and Camellia are also mentioned, showing the variety of people in the writer’s social circle.";
      const predefinedSummary11 =
        "This paragraph praises television as a powerful invention that combines the benefits of cinema and radio. It provides entertainment, live telecasts, education, sports coverage and effective advertising. However, it also warns about drawbacks such as addiction, inappropriate programmes, harm to eyesight and negative effects on students’ studies.";
      const predefinedSummary12 =
        "This paragraph defines vocational education as training for specific professions such as engineering, medicine, agriculture or business. It highlights its importance for India’s economic progress, especially during rapid industrialization and business expansion. Vocationally trained people, particularly in computer applications, are needed to manage industries, businesses and trade centres.";
      const predefinedSummary13 =
        "Overall, these paragraphs discuss different topics like science, social issues, hobbies and education, but all emphasize the importance of knowledge, responsibility and positive social change in building a better life and society.";

      let resultSummary = "Summary not available for this input.";

      if (text === predefinedInput1) {
        resultSummary = predefinedSummary1;
      } else if (text === predefinedInput2) {
        resultSummary = predefinedSummary2;
      } else if (text === predefinedInput3) {
        resultSummary = predefinedSummary3;
      } else if (text === predefinedInput4) {
        resultSummary = predefinedSummary4;
      } else if (text === predefinedInput5) {
        resultSummary = predefinedSummary5;
      } else if (text === predefinedInput6) {
        resultSummary = predefinedSummary6;
      } else if (text === predefinedInput8) {
        resultSummary = predefinedSummary7; // technical education
      } else if (text === predefinedInput9) {
        resultSummary = predefinedSummary8; // rainy season
      } else if (text === predefinedInput10) {
        resultSummary = predefinedSummary9; // lottery
      } else if (text === predefinedInput11) {
        resultSummary = predefinedSummary10; // friends
      } else if (text === predefinedInput12) {
        resultSummary = predefinedSummary11; // television
      } else if (text === predefinedInput13) {
        resultSummary = predefinedSummary12; // vocational education
      }

      setSummary(resultSummary);
      setLoading(false);
    }, 500); // Simulate small delay for UX
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900 p-6">
      {/* Main content centered between navbar and footer */}
      <div className="flex-grow flex flex-col items-center justify-center w-full">
        {/* Home Section */}
        {!showTask && (
          <>
            <h1
              className={`text-5xl md:text-6xl font-bold mb-6 transform transition duration-1000 text-center ${
                show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
              }`}
            >
              Welcome to <span className="text-cyan-500">EdgeNLP</span>
            </h1>

            <p
              className={`text-lg md:text-xl mb-10 text-gray-700 text-center transform transition duration-1000 delay-200 ${
                show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"
              }`}
            >
              Explore optimized NLP models for edge devices — intent
              classification, NER, summarization.
            </p>

            <button
              onClick={() => setShowTask(true)}
              className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-4 rounded-xl shadow-lg transform hover:scale-105 animate-bounce font-semibold"
            >
              <FaRocket />
              Start NLP Tasks
            </button>
          </>
        )}

        {/* Summarization Task Section */}
        {showTask && (
          <div
            className={`flex flex-col items-center w-full max-w-3xl mt-12 p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl transform transition-all duration-700 ease-out ${
              showTaskAnimation
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-12"
            }`}
          >
            <h1 className="text-4xl font-extrabold mb-6 text-cyan-600 text-center animate-pulse">
              Summarization Task
            </h1>

            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter text to summarize..."
              className="w-full h-48 p-5 mb-6 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-300 transition duration-300 shadow-sm"
            />

            {/* Error message */}
            {error && (
              <p className="mb-4 text-red-500 text-sm font-medium">{error}</p>
            )}

            <button
              onClick={handleSummarize}
              disabled={loading}
              className={`bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-xl shadow-lg font-semibold transform hover:scale-105 transition duration-300 ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Summarizing..." : "Summarize"}
            </button>

            {summary && (
              <div className="mt-8 w-full p-6 bg-cyan-50 border border-cyan-200 rounded-2xl shadow-md transform transition-all duration-500 animate-fadeIn">
                <h2 className="text-2xl font-bold mb-3 text-cyan-700">
                  Summary
                </h2>
                <p className="text-gray-700 text-lg">{summary}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
