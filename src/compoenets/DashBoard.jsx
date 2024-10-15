import React, { useEffect } from 'react'
import { useUser } from '../context/userContext'
import { useNavigate } from 'react-router-dom'

const DashBoard = () => {
    const { isLoggedIn } = useUser()

    const navigate = useNavigate()


    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/")
        }
    }, [isLoggedIn, navigate])



    return (

        <main className='w-[75%] max-md:w-[95%] max-md:mx-auto my-[40%] md:ml-[25%]  md:my-[10%] text-center '>
         <h1>DashBoard</h1>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro nostrum aut vel adipisci in minima odio saepe quod amet, debitis corporis voluptates iste esse recusandae sint, vitae molestiae reprehenderit dolor.
         Eius dolore animi sint placeat libero alias dolor perferendis illum. Ab quaerat, in laborum suscipit vel sapiente at, magnam modi cum ea numquam minima nobis doloremque? Nostrum veritatis dolorum ipsam!
         Repellendus laudantium ea perspiciatis sint quod saepe, ipsum voluptates, hic labore maxime enim expedita corporis eaque. Totam praesentium, omnis perspiciatis earum repellendus excepturi harum illo consequuntur laboriosam in obcaecati veniam!
         Architecto, quidem illum quis ratione dicta tempora quaerat, minima unde culpa suscipit nostrum voluptatum nihil earum at labore laudantium rerum! Officiis id, unde molestias minima sit ex ea obcaecati voluptates!
         Quam a suscipit laudantium fugit quia reiciendis voluptate neque quos corporis, inventore ex eaque recusandae exercitationem fuga dolor molestiae facere, voluptatum aliquid dolores sunt laboriosam ad. Velit inventore quod quidem!
         Laudantium culpa possimus nisi. Veniam sunt voluptate, nam eaque, culpa facere hic temporibus ducimus, eligendi explicabo beatae in. Delectus temporibus magni nesciunt omnis libero accusantium voluptas nobis fuga non aut!
         Neque maiores doloribus quisquam, tenetur culpa delectus quibusdam, voluptates blanditiis facere commodi sed molestiae sequi ex totam repellendus dolorum, quidem ea iusto atque ipsa ipsum fuga? Commodi rerum sed ducimus.
         Culpa repellat perferendis neque sint eos saepe qui aperiam eaque, similique laboriosam consequuntur, quia numquam odit ex corrupti sapiente. Rerum assumenda ipsa aliquid dicta distinctio blanditiis fuga voluptas, dolorem illo?
         Sunt, velit? Natus delectus eius sapiente ullam quaerat id! Consectetur rerum ipsum temporibus mollitia veritatis optio iusto ad eius quis aspernatur, perspiciatis sequi quo, ullam incidunt dolorum eos? Nemo, quas.
         Dolorem consequuntur, commodi ipsa, nulla incidunt nihil enim numquam molestias esse, atque minus recusandae ad rerum similique. Aut nihil dignissimos corporis delectus necessitatibus odio sapiente, optio, alias soluta molestiae inventore.
         Voluptas eius eaque quibusdam at optio assumenda fugit id aspernatur quis recusandae beatae quidem, nemo ducimus? Accusantium, eveniet id! Totam blanditiis quia iure autem quasi, error dolores dolorem? Quisquam, eveniet.
         Velit, ipsa cum tenetur omnis veniam inventore aperiam possimus illo maiores corrupti vero, nobis ad impedit id, praesentium voluptatem autem exercitationem? Laboriosam veritatis accusamus quibusdam tempora exercitationem beatae illum architecto?
         Cupiditate doloremque cumque aliquam vel voluptates repudiandae officia pariatur iusto odio, dolor, quidem atque. Illum quisquam, dolor, impedit voluptatem delectus ratione quibusdam pariatur esse ipsum maiores doloribus aperiam blanditiis cupiditate?
         Nulla repellat eaque iste dolores animi, laboriosam expedita pariatur. Ex eaque nemo dignissimos, est labore ratione nostrum ducimus iste quibusdam aspernatur placeat nobis debitis atque porro nam ab neque delectus!
         Reprehenderit neque ex, consectetur modi deserunt quasi deleniti vitae nam. Tempore rerum necessitatibus quo similique cumque quas error et numquam ullam exercitationem nisi, neque velit adipisci possimus voluptas deleniti veritatis?
         Excepturi odio vel quam blanditiis soluta, ab atque saepe suscipit in id eius veniam sapiente sit dicta eaque voluptate? Eaque quos suscipit voluptatum est eius omnis, temporibus magnam quae non.
         Rerum excepturi cumque deleniti, sit non soluta ullam fugiat officiis officia dolorum deserunt, illum sed inventore error amet reiciendis, accusamus laboriosam enim natus doloremque fugit veritatis porro? Odit, quo a!
         Obcaecati accusamus libero ipsa iste nostrum velit cupiditate quod doloribus repellat laborum quos maxime exercitationem atque voluptate eos aut, ullam nihil. Impedit atque accusamus debitis mollitia ab corporis quasi placeat.
         Id sapiente sint repellat voluptatem totam hic perspiciatis quisquam ullam fugit aliquid quas vero, dolores ad nobis illo doloribus impedit optio ea at explicabo. Fugit porro eaque aperiam quaerat debitis?
         Dolore fuga mollitia numquam fugiat officia quam hic beatae minus neque magni soluta architecto doloremque velit iusto eum inventore rerum nesciunt cumque nulla ullam, adipisci reiciendis delectus suscipit. Debitis, aperiam?
         Recusandae soluta, eius maiores ab iure dignissimos beatae, incidunt rerum dicta saepe velit? Accusantium quaerat voluptas quibusdam nam! Pariatur provident facere architecto cum iure ullam expedita excepturi illum ipsum laborum?
         Adipisci quidem quis sed nesciunt sit similique rem officiis sequi voluptatibus, rerum perspiciatis illo iste amet sapiente fugit, nemo sint? Non sed adipisci ullam quos consequatur, commodi rem dolore eveniet?
         Perferendis, nemo repellat fugiat inventore nobis earum dicta, ipsa voluptas facilis doloribus atque sunt voluptatum beatae. Beatae, qui vitae quas voluptatem aperiam mollitia aspernatur nemo fugiat! Sequi, doloribus sit! Modi.
         Debitis ipsa illo voluptate officiis dicta cumque aspernatur. Amet harum ab aliquam dolor ratione possimus aperiam illo deleniti maxime, delectus ipsam, voluptatem modi ipsum eveniet optio, molestiae et cum libero!
         Quis minus minima quam libero voluptatum, corporis asperiores ab, explicabo maiores debitis aliquid voluptas natus recusandae necessitatibus, eligendi magnam inventore! Beatae modi recusandae ipsam. Corporis maxime magnam recusandae ratione dolor!
         Exercitationem quas atque dolore dolores aliquid eligendi ut quos tempore, nulla hic laboriosam totam quaerat perferendis, vero iste sed quod facilis fuga officiis numquam. Hic dolorum adipisci pariatur accusantium non!
         Rerum, vel! Esse, quo nobis iste sed sunt officia est aliquid, et cum exercitationem illo, ullam recusandae maxime praesentium! Aperiam iusto quod suscipit commodi nesciunt amet molestiae facere a qui.
         Sint eaque aut earum, iusto ipsa repellendus eligendi nobis hic sequi culpa dolore pariatur quasi tenetur itaque totam vitae cupiditate esse commodi odio quam, impedit dolores exercitationem. Laborum, vero eum.
         Quod consectetur perspiciatis cumque, blanditiis voluptatum dolores, pariatur delectus porro quibusdam temporibus, placeat assumenda. Aliquam, fugit dolorum beatae sunt iusto nisi sint odio id dicta illum, magnam doloribus quia recusandae.
         Ea voluptas earum inventore at distinctio sequi. Cupiditate id reiciendis quae facere soluta nulla minima quam illum adipisci neque, eaque ipsa quidem vel temporibus unde nostrum repudiandae. Dolorum, modi amet!
         Labore a, minima magnam quisquam maiores eius reprehenderit corporis rerum ad, consequatur eos sunt earum atque laboriosam nostrum doloremque aspernatur nulla quia ullam facilis? Accusantium voluptatem facere nostrum libero id?
         Voluptatibus sapiente suscipit ducimus, repudiandae praesentium, accusantium voluptatem autem adipisci aspernatur deserunt, incidunt commodi architecto voluptate a similique qui officiis explicabo soluta odio eos ab tenetur quasi molestiae vero! Ipsum!
         Deleniti sapiente adipisci debitis saepe tempora, enim ab, consequuntur repellendus earum ratione dolorum quae unde nisi assumenda accusamus dolores. Praesentium necessitatibus repudiandae quo harum! Odit, labore cumque? Autem, nihil aliquam!
         Repellat voluptates, eos voluptatum maxime explicabo tempore quam nam sed totam. Beatae quae voluptatum numquam porro veritatis dolores perspiciatis magni culpa! Blanditiis tempora tenetur explicabo dolore adipisci enim provident fuga!
         Cum ullam reiciendis repellat maiores a reprehenderit expedita hic itaque pariatur, possimus unde ex rem laboriosam nulla non blanditiis quibusdam adipisci excepturi rerum alias. Ipsam quasi suscipit nostrum recusandae architecto!
         Sunt minus, vel repellendus sint consectetur tempora repellat ratione repudiandae magnam nulla dicta nihil, praesentium doloremque molestias corporis autem ab quia sapiente nostrum dolor accusantium consequatur sed officiis at! Qui.
         Tenetur iste, quo temporibus quos praesentium nihil delectus dicta laborum, ipsum iusto fugit. Enim consequatur reprehenderit adipisci quia magnam, error quis ullam ad quod. Debitis asperiores culpa deserunt at ut.
         Non inventore rem et quo suscipit velit quidem dolore, eius minus odio. Soluta exercitationem dolorem qui sunt iste aliquid! Cum, veniam! Deserunt nisi optio sint mollitia magnam eum quisquam quo.
         Suscipit ab quo aliquid corporis necessitatibus sed blanditiis nostrum quia omnis consectetur asperiores quaerat repellat ratione, accusantium minima porro eveniet quod, nobis dolorem hic? Inventore est fugit error consequuntur facere!
         Adipisci incidunt cum exercitationem blanditiis, eos esse ut magni vero distinctio similique illum totam enim voluptate nam doloribus, eveniet alias culpa sed libero cumque tenetur! Modi iste aut tempore doloribus?
         Ducimus nemo illo facere pariatur? Assumenda, architecto asperiores? Molestiae rem nulla inventore tenetur voluptatibus sed! A maxime mollitia ipsum. Aspernatur ut et cumque nulla tempora, iusto itaque maiores quis porro!
         Rerum id ipsam iusto ea nam alias quia exercitationem asperiores consequuntur impedit quis, commodi hic nulla, et aperiam aut debitis blanditiis ullam amet fugit est vel. Quis vero omnis neque!
         Laboriosam alias, consequatur dolor totam, neque quisquam cum officia eius beatae nulla nostrum sapiente obcaecati esse ipsa tenetur quaerat ea sed quo cumque dolorem pariatur voluptatem itaque. Exercitationem, incidunt voluptates!
         Aliquid non nesciunt nobis accusamus porro commodi rerum cumque, odio fuga eos veniam ea quaerat ipsum consectetur beatae aliquam, dicta suscipit! Harum quas saepe quis est accusamus corporis sit voluptatibus.
         Optio cupiditate, distinctio officia, ad enim et nam autem minus, earum magni a laborum! Ad impedit ut, laboriosam ea repellendus perspiciatis doloribus quis commodi veniam corporis inventore placeat modi temporibus.
         Suscipit quia atque similique exercitationem cum in omnis perspiciatis illum maiores? Quam reiciendis neque harum? Odit veniam cupiditate repellat, inventore nisi cum incidunt aliquid dolorem officiis! Natus labore quisquam incidunt.
         At debitis, nam velit deleniti facilis ratione obcaecati, hic officiis perspiciatis iure suscipit neque modi repellendus repellat eius delectus, voluptatibus earum facere dolore! Officiis placeat doloremque optio deleniti blanditiis impedit.
         Totam, iusto illum! Sapiente dignissimos voluptatibus possimus qui iste deserunt mollitia eum at enim soluta distinctio facere, quis exercitationem in odio unde temporibus. Eaque accusamus autem odio laboriosam ipsa omnis.
         Reiciendis explicabo labore nobis veritatis, corrupti distinctio ducimus minima reprehenderit ratione qui, error esse nemo iure alias necessitatibus dicta eum. Laudantium, doloribus sint! Sunt repellendus, maiores quo suscipit optio quibusdam?
         Harum sed voluptate soluta assumenda doloribus. Qui quo in neque officiis ut et officia dolore. Sed beatae culpa libero quia deserunt dolorum asperiores quod temporibus excepturi itaque. Velit, beatae quidem!
         Labore perspiciatis nesciunt beatae. Architecto ipsa ea eaque, quidem vitae et, possimus magnam praesentium nemo qui labore eius cupiditate. Totam maxime reiciendis est dolorem doloremque earum corrupti repellendus fuga veritatis.
         Sint cumque quaerat ipsam quidem suscipit sapiente laboriosam nemo numquam? Temporibus, nam! Fugit quas autem, voluptatibus rerum et nulla, animi impedit atque quidem facilis aperiam beatae molestias libero? Hic, dicta.
         Corrupti, repudiandae deleniti? Beatae id reprehenderit alias ducimus quis quisquam voluptas. Tempore nemo iste, libero esse perspiciatis rem sapiente maiores ex fugit soluta obcaecati. Omnis illum necessitatibus voluptatum quisquam beatae!
         Quibusdam modi, explicabo ea distinctio vero ab quidem totam numquam iure suscipit minima voluptates sapiente fugit itaque blanditiis, architecto temporibus praesentium! Unde nam veritatis voluptas vel dignissimos non quis! Vero.
         Repellendus assumenda repellat atque unde debitis, voluptate quibusdam in vitae laboriosam et explicabo ullam fugiat delectus id excepturi exercitationem ratione laudantium molestias nobis vel culpa enim? Aliquam minus tenetur consectetur.
         Harum, reiciendis suscipit sapiente expedita dolores tenetur possimus et deleniti quae non voluptatum ratione officiis impedit neque minima aliquid dicta, esse saepe blanditiis? Quasi sit reiciendis numquam explicabo, veritatis ex.
         Pariatur libero rem ipsam repudiandae natus officia enim repellat voluptate est, perspiciatis odio deserunt voluptates temporibus obcaecati illum aut, explicabo exercitationem? Voluptatum ducimus doloremque cumque ex. Architecto aliquam earum ad.
         Quibusdam eaque maxime facere pariatur eos reiciendis in dignissimos! Voluptatum sequi ducimus eos officiis accusantium, ipsa temporibus dolorum natus, quos minima possimus laboriosam illum! Rerum ipsa dignissimos optio similique asperiores?
         Dolore doloribus mollitia tempora, neque fuga voluptatibus non distinctio harum iste hic odit, unde iure minima beatae provident consectetur reiciendis eius? Molestiae, ad sunt provident tenetur laudantium consequatur saepe ipsam?
         Sunt nesciunt harum inventore culpa quidem repudiandae, eos natus rerum optio omnis deleniti nihil odio, maxime blanditiis quod aliquam. Dolorum corrupti fugit quaerat obcaecati commodi beatae officiis inventore ut fuga.
         Vero deleniti assumenda laudantium fugiat, distinctio provident itaque sint quibusdam illo, eum beatae obcaecati similique, quis dolore nesciunt nihil doloremque magnam totam velit optio. Accusantium in quae molestias praesentium qui.
         Harum saepe tempore maxime molestias autem explicabo quas iusto maiores obcaecati, ratione dolor error consequatur ut cumque, assumenda similique doloribus eum pariatur illo totam at quae. Similique deserunt facilis temporibus!
         Quia dicta necessitatibus similique, alias deleniti velit sint molestias doloremque tempora id, doloribus eveniet aut fuga excepturi numquam unde ipsum voluptas repellat facere corrupti commodi incidunt quae in! Magnam, sapiente?
         Animi, maiores doloribus. Illum nam magni deserunt magnam, sunt quod ad natus molestias, tempore labore eius ullam repellendus. Necessitatibus velit quisquam voluptates tempora tenetur at harum illum doloremque provident ea?
         Odit repudiandae minus perspiciatis magni quae, quis possimus aperiam, sint deserunt in animi, ipsa rem fuga cum corporis itaque quas at assumenda ab. Atque voluptates nulla autem excepturi quis quaerat?
         Dolore qui modi deserunt sit at autem, delectus, esse quidem, error sed tempore eos corrupti. Accusantium quo ratione eaque? Possimus sunt commodi delectus minus nobis iste et magni aut tempora.
         Ducimus laboriosam dolorum cupiditate tempora doloribus beatae incidunt, eos odit voluptates ad, fugit dicta id? Tempore laboriosam iusto inventore magni magnam mollitia incidunt, exercitationem optio iste! Distinctio quaerat ipsam obcaecati.
         Quidem modi, quo quod laudantium consequuntur sunt corrupti ab itaque exercitationem nesciunt quia voluptate provident inventore, sint dignissimos officiis blanditiis architecto minus autem quis libero illo quasi voluptatem sit. Earum.
         Optio dignissimos, inventore numquam ullam quis ipsam id quos quas nemo nobis eius magni obcaecati quo nesciunt sed et tenetur qui odit! Suscipit, ipsa rem rerum qui quaerat labore minima.
         Minima error quaerat aperiam aliquam cupiditate, rem mollitia temporibus quisquam cum esse. Exercitationem soluta rerum voluptatum sapiente quo reprehenderit eum laborum, numquam aperiam placeat mollitia optio, sunt natus distinctio similique.
         Impedit ipsum quas nemo soluta inventore possimus beatae quasi deserunt a dolorem corrupti expedita, in eum, enim neque suscipit pariatur incidunt quibusdam dignissimos. Natus ipsam labore, in laborum officia quasi!
         Quam laudantium minus, reiciendis eaque aliquam qui, molestias accusantium necessitatibus rem fuga ipsum aut, eos vero velit ut perferendis. Laborum reprehenderit et maxime earum aliquam temporibus ipsum sapiente deleniti sunt!
         Rem, deserunt tempore officiis est facere sit iusto voluptas consectetur maxime asperiores obcaecati magni neque tempora quibusdam eaque debitis saepe, culpa exercitationem fugiat, alias distinctio laboriosam accusantium? Tenetur, laboriosam eaque?
         Similique optio consequatur, quo aspernatur id sit quia perspiciatis dicta repellat corporis quas qui accusamus cupiditate expedita nihil odit fugiat. Repellat officia, eveniet nesciunt adipisci nihil dolorem mollitia hic impedit?
         Quaerat ipsa repudiandae, incidunt quae magnam, harum illo maxime illum nostrum debitis ducimus? Culpa corporis labore, saepe totam, cupiditate minima quos eligendi nemo perspiciatis, perferendis fuga excepturi expedita dolorum veritatis.
         Fugit, tempora quas repellendus neque, architecto ipsum illo dolorum totam libero amet eveniet et ab dolore odit unde non quo! Vero perferendis ullam dignissimos accusamus aperiam? Eligendi, delectus rerum? Soluta.
         Nemo dolorem, totam doloremque esse quasi accusantium quos officiis aut non enim laborum id dolore, quam inventore fugit voluptas libero impedit a, nam culpa quo excepturi odio dolorum! Similique, et?
         Exercitationem quam totam dolorem voluptatem? Dolore, natus. Magni recusandae sequi magnam distinctio. Ex cumque delectus sapiente suscipit accusantium ullam facere sit doloribus laborum, in nobis ipsum eligendi? Nemo, amet minus?
         Laborum minima cum odit explicabo rerum quisquam, quas optio nisi, corporis ducimus vero aliquam corrupti libero error! Officia, blanditiis eligendi culpa in sed dignissimos est veniam quos deleniti voluptatibus repellendus?
         Nesciunt laudantium praesentium tempora aspernatur autem consectetur consequuntur odio beatae modi vel nulla magnam amet ducimus in itaque ratione, quaerat temporibus dolores nisi fugiat, optio unde maiores et. Voluptas, doloribus!
         Sint consequuntur eveniet fugiat laudantium dolorem itaque obcaecati fuga tempore quasi quod! Adipisci debitis dolorem provident, expedita eius nemo, ad saepe officia ea fugiat veritatis voluptates, sit praesentium nihil earum.
         Similique explicabo commodi iure quia ipsa veniam maiores expedita sit eveniet deleniti quam nam adipisci animi sed, tempore eaque molestiae, quos veritatis impedit libero unde facilis? Mollitia repellendus numquam magnam?
         Qui quis sed quasi repellendus excepturi amet delectus, iste facere eius dolor quas, corrupti deleniti ab recusandae aliquam. Corrupti maiores sit et temporibus quam perferendis omnis excepturi maxime harum libero.
         Qui vel ducimus possimus molestiae ullam incidunt, voluptate voluptates blanditiis saepe veniam quia eius eveniet, quidem fuga reprehenderit ad tenetur a aliquid earum minima soluta consequatur? Aperiam obcaecati nostrum culpa!
         Rem ex culpa dolore labore impedit perspiciatis, nesciunt obcaecati, quos nemo aut autem minima? Ipsa dicta saepe consectetur laboriosam illum quam, consequatur doloremque ipsam explicabo dignissimos? Doloribus quae perferendis nesciunt?
         Non accusamus, dolore numquam corrupti consectetur nostrum fuga similique assumenda quam error, ad, eligendi eius. Atque aperiam voluptates, ducimus quasi quia doloribus similique, sint iure consequatur a vitae ut natus?
         Magni recusandae nobis itaque dolor, aspernatur in error delectus cum iusto quod vitae eveniet inventore eaque laborum perspiciatis corporis incidunt minima repellendus fugit ullam quidem aperiam minus esse ab! Quia.
         Doloribus, perspiciatis repudiandae modi laboriosam debitis dicta ducimus nisi cum fuga, accusantium odit, repellat pariatur corrupti inventore officiis enim tempore minima cumque. Eligendi adipisci ab eum odio ea veniam iusto.
         Ex deleniti sit saepe mollitia quisquam expedita possimus ut! Aliquid delectus commodi natus fugit eligendi ipsam, maxime non. Provident a adipisci quis molestias sint impedit delectus amet rerum distinctio vero?
         Aspernatur, laboriosam nobis! Mollitia in ex ut facilis, voluptates odit enim porro consectetur esse. Illo voluptates incidunt fugiat dignissimos omnis laboriosam odio iusto sit commodi repudiandae inventore, non necessitatibus. Cum!
         Veritatis amet nulla consequatur, provident ipsa repellendus libero cumque, modi voluptates illo voluptatibus cupiditate doloribus! Quaerat ea, enim architecto dolor a nisi ut veniam? A optio alias perferendis cum sapiente!
         Aut in, eos maxime ratione nam soluta accusantium aperiam debitis similique, nobis placeat maiores iste officiis consequatur, ducimus enim sequi. Pariatur quis sint veniam ex ratione provident adipisci cum vel.
         Tempora, exercitationem earum dolorem omnis quidem cupiditate facere ab voluptas vitae, veritatis error voluptatibus saepe magni provident quia sit, impedit possimus nisi quaerat laudantium sequi. Rerum iure fuga tempore iste!
         Voluptas, explicabo! Velit possimus laboriosam minus eveniet obcaecati explicabo eum error ad assumenda nam officiis, rerum, minima, repellendus aspernatur. Incidunt maxime eaque est deserunt mollitia culpa molestias aliquid! Quis, aspernatur.
         Hic eos aliquam consectetur amet recusandae obcaecati maxime. Mollitia repudiandae modi eaque eligendi quasi accusantium! Totam sunt accusamus laudantium quis praesentium necessitatibus error earum iure, accusantium eum, quo maiores ipsam.
         Corporis perferendis voluptatem, quo rem temporibus tenetur eaque vero veritatis est eveniet repellat, tempore quos saepe neque cupiditate! Soluta voluptatum accusamus dolor architecto quod nesciunt veritatis atque aspernatur numquam nisi?
         Non omnis optio autem eaque eveniet in dolorem at, nemo mollitia sint minus. Repellat eveniet, dolor a tenetur minima laboriosam repudiandae itaque ullam necessitatibus vero velit neque accusantium corporis facere?
         Veniam inventore animi quae quod deleniti amet illo ut temporibus distinctio? Quam earum dicta quasi aperiam iste veniam assumenda maiores repudiandae ut quae. Delectus molestiae, voluptate omnis laboriosam ex perspiciatis!
         Harum ipsum qui error ut porro magnam tenetur dolor iure enim libero rem voluptas velit maiores, quisquam hic debitis aliquid temporibus laudantium cumque earum dolorum eligendi quod! Ea, exercitationem voluptate.
         Sequi, nihil! Deleniti neque velit magnam, tenetur repellendus perspiciatis hic sunt nemo provident delectus consequatur, impedit harum fuga ipsam, labore dolore! Totam eveniet iure, nisi in fugit non quo labore.
        </main>

    )
}

export default DashBoard
