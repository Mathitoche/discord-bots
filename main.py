import discord
from discord.ext import commands

intents = discord.Intents.default()
intents.message_content = True

bot = commands.Bot(command_prefix="!", intents=intents)

@bot.event
async def on_ready():
    print(f"Bot connecté en tant que {bot.user}")

@bot.tree.command(name="start", description="Démarrer la partie")
async def start(interaction: discord.Interaction):
    await interaction.response.send_message("🎮 La partie commence !")

@bot.tree.command(name="end", description="Arrêter la partie")
async def end(interaction: discord.Interaction):
    await interaction.response.send_message("🛑 La partie est terminée.")

@bot.event
async def setup_hook():
    await bot.tree.sync()

import os
bot.run(os.getenv("DISCORD_TOKEN"))
