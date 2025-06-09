function mapDemonaDownload_over()
{
    document.images.menuDemona.src="images/layout/demona_layout_03_demona_download.jpg";
}
function mapDemonaForum_over()
{
    document.images.menuDemona.src="images/layout/demona_layout_03_demona_forum.jpg";
}
function mapDemonaSvet_over()
{
    document.images.menuDemona.src="images/layout/demona_layout_03_demona_svet.jpg";
}

/****/

function mapDownloadDemona_over()
{
    document.images.menuDemona.src="images/layout/demona_layout_03_download_demona.jpg";
}
function mapDownloadForum_over()
{
    document.images.menuDemona.src="images/layout/demona_layout_03_download_forum.jpg";
}
function mapDownloadSvet_over()
{
    document.images.menuDemona.src="images/layout/demona_layout_03_download_svet.jpg";
}

/****/

function mapForumDemona_over()
{
    document.images.menuDemona.src="images/layout/demona_layout_03_forum_demona.jpg";
}
function mapForumDownload_over()
{
    document.images.menuDemona.src="images/layout/demona_layout_03_forum_download.jpg";
}
function mapForumSvet_over()
{
    document.images.menuDemona.src="images/layout/demona_layout_03_forum_svet.jpg";
}

/****/

function mapSvetDemona_over()
{
    document.images.menuDemona.src="images/layout/demona_layout_03_svet_demona.jpg";
}
function mapSvetDownload_over()
{
    document.images.menuDemona.src="images/layout/demona_layout_03_svet_download.jpg";
}
function mapSvetForum_over()
{
    document.images.menuDemona.src="images/layout/demona_layout_03_svet_forum.jpg";
}

/****/

function mapDemona_out()
{
    document.images.menuDemona.src="images/layout/demona_layout_03_demona.jpg";
}
function mapDownload_out()
{
    document.images.menuDemona.src="images/layout/demona_layout_03_download.jpg";
}
function mapForum_out()
{
    document.images.menuDemona.src="images/layout/demona_layout_03_forum.jpg";
}
function mapSvet_out()
{
    document.images.menuDemona.src="images/layout/demona_layout_03_svet.jpg";
}

/****/

function circleMechanika_over()
{
    document.images.circleImage.src="images/layout/kolecko_mechanika.jpg";
}

function circleSystemy_over()
{
    document.images.circleImage.src="images/layout/kolecko_systemy.jpg";
}

function circleRemesla_over()
{
    document.images.circleImage.src="images/layout/kolecko_remesla.jpg";
}

function circleObrazky_over()
{
    document.images.circleImage.src="images/layout/kolecko_obrazky.jpg";
}

function circlePostava_over()
{
    document.images.circleImage.src="images/layout/kolecko_postava.jpg";
}

function circle_out()
{
    document.images.circleImage.src="images/layout/kolecko_cb.jpg";
}

/****/

function last_update() 
{
    document.write('<script language="JavaScript">\n');
    document.write('<!-- \n');
    document.write('var datum = new Date(document.lastModified); \n');
    document.write('var rok = 1900; \n');
    document.write('if ((datum.getYear() > 100) && (datum.getYear() < 200)) { \n');
    document.write('rok+= datum.getYear(); \n');
    document.write('}  else { \n');
    document.write('rok = datum.getYear(); \n');
    document.write('} \n');
    document.write('document.write(" ",datum.getDate(),". ",datum.getMonth()+1,". ",rok); \n');
    document.write('//--> \n');
    document.write('</script> \n');
}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//fce na schovani a znovu zviditelneni jakyhokoliv elementu
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
function ShowHideElementByID(id)    
{
	if (document.getElementById) 
	{
	    if(document.getElementById(id).style.display == "none")
	    {
			document.getElementById(id).style.display = 'block';
		}
		else 
		    document.getElementById(id).style.display = 'none';
	}	
	else
	{
		if(document.layers)
		{
			if(document.id.display == "none")
			{
			    document.id.display = 'block'; 
			}
			else 
			    document.id.display = 'none';
		}
		else
		{
		    if(document.all.id.style.visibility == "none")
		    {
			    document.all.id.style.visibility = 'block';
			}
		    else 
		        document.all.id.style.visibility = 'none';
		}
	}
}




